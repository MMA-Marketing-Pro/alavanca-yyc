/* =========================================================
   ALAVANCA — site scripts
   Nav scroll, mobile menu, scroll reveals, lead modal,
   booking page program switcher, FAQ accordion, dynamic year.
   ========================================================= */

(function () {
  'use strict';

  /* ---------- Dynamic copyright year ---------- */
  function initYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ---------- Nav scroll state ---------- */
  function initNavScroll() {
    var nav = document.querySelector('.nav');
    if (!nav) return;
    var onScroll = function () {
      if (window.scrollY > 24) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Mobile menu toggle ---------- */
  function initMobileNav() {
    var nav = document.querySelector('.nav');
    var toggle = document.querySelector('.nav__toggle');
    if (!nav || !toggle) return;
    toggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      var open = nav.classList.contains('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    document.querySelectorAll('.nav__mobile a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Scroll reveal (IntersectionObserver) ---------- */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- FAQ accordion ---------- */
  function initFaq() {
    document.querySelectorAll('.faq__trigger').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.faq__item');
        if (!item) return;
        item.classList.toggle('is-open');
        var expanded = item.classList.contains('is-open');
        btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      });
    });
  }

  /* ---------- Programs list (shared with modal + booking) ---------- */
  var PROGRAMS = [
    { id: 'adult-bjj',          label: 'Adult Brazilian Jiu-Jitsu' },
    { id: 'kids-bjj',           label: 'Kids Brazilian Jiu-Jitsu' },
    { id: 'tiny-warriors',      label: 'Tiny Warriors (ages 3–6)' },
    { id: 'adult-muay-thai',    label: 'Adult Muay Thai' },
    { id: 'kids-muay-thai',     label: 'Kids Muay Thai' },
    { id: 'mma',                label: 'MMA (Mixed Martial Arts)' },
    { id: 'womens-bjj',         label: "Women's-Only BJJ (Shawnessy)" },
    { id: 'combat-conditioning',label: 'Combat Conditioning' },
    { id: 'summer-camps',       label: 'Summer Camps (Kids)' }
  ];

  /* ---------- Lead modal ---------- */
  function initLeadModal() {
    var modal = document.getElementById('lead-modal');
    if (!modal) return;

    var select = modal.querySelector('#lead-program');
    if (select && !select.options.length) {
      var placeholder = document.createElement('option');
      placeholder.value = '';
      placeholder.textContent = 'Select a class…';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
      PROGRAMS.forEach(function (p) {
        var opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = p.label;
        select.appendChild(opt);
      });
    }

    function open(presetProgram) {
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      if (presetProgram && select) {
        for (var i = 0; i < select.options.length; i++) {
          if (select.options[i].value === presetProgram) { select.selectedIndex = i; break; }
        }
      }
      setTimeout(function () {
        var first = modal.querySelector('input');
        if (first) first.focus();
      }, 200);
    }
    function close() {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-cta="lead-modal"]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        open(btn.getAttribute('data-program') || '');
      });
    });

    modal.querySelectorAll('[data-modal-close]').forEach(function (el) {
      el.addEventListener('click', close);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) close();
    });

    // Phone mask
    var phone = modal.querySelector('#lead-phone');
    if (phone) {
      phone.addEventListener('input', function () {
        var digits = phone.value.replace(/\D/g, '').slice(0, 10);
        var out = digits;
        if (digits.length > 6) out = '(' + digits.slice(0,3) + ') ' + digits.slice(3,6) + '-' + digits.slice(6);
        else if (digits.length > 3) out = '(' + digits.slice(0,3) + ') ' + digits.slice(3);
        else if (digits.length > 0) out = '(' + digits;
        phone.value = out;
      });
    }

    // Submit
    var form = modal.querySelector('#lead-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var fields = form.querySelectorAll('[required]');
      var valid = true;
      fields.forEach(function (f) {
        var wrap = f.closest('.lead-modal__field');
        var ok = !!f.value && (f.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value));
        if (!ok) {
          if (wrap) wrap.classList.add('is-invalid');
          valid = false;
        } else if (wrap) {
          wrap.classList.remove('is-invalid');
        }
      });
      if (!valid) return;

      var data = {
        firstName: form.elements['firstName'].value.trim(),
        lastName:  form.elements['lastName'].value.trim(),
        email:     form.elements['email'].value.trim(),
        phone:     form.elements['phone'].value.trim(),
        program:   form.elements['program'].value
      };
      try { sessionStorage.setItem('leadFormData', JSON.stringify(data)); } catch (err) {}
      // TODO: wire this submission to a webhook / Go High Level form endpoint if backend lead capture is needed.
      window.location.href = 'booking.html?program=' + encodeURIComponent(data.program);
    });
  }

  /* ---------- Booking page: program switcher + URL param ---------- */
  function initBookingPage() {
    var wrap = document.querySelector('.booking-calendar-wrap');
    if (!wrap) return;

    var params = new URLSearchParams(window.location.search);
    var selected = params.get('program') || 'adult-bjj';

    // Pre-fill name if leadFormData exists (for visual trust; GHL embed would need URL params to really pre-fill)
    var lead;
    try { lead = JSON.parse(sessionStorage.getItem('leadFormData') || 'null'); } catch (e) {}
    if (lead && lead.firstName) {
      document.querySelectorAll('[data-lead-name]').forEach(function (el) {
        el.textContent = lead.firstName;
      });
    }

    function showProgram(id) {
      document.querySelectorAll('.booking-calendar').forEach(function (c) {
        c.classList.toggle('is-active', c.getAttribute('data-program') === id);
      });
      document.querySelectorAll('.program-switcher__chip').forEach(function (chip) {
        chip.classList.toggle('is-active', chip.getAttribute('data-program') === id);
      });
      document.querySelectorAll('[data-program-label]').forEach(function (el) {
        var p = PROGRAMS.filter(function (x) { return x.id === id; })[0];
        if (p) el.textContent = p.label;
      });
    }
    showProgram(selected);

    document.querySelectorAll('.program-switcher__chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        var id = chip.getAttribute('data-program');
        if (!id) return;
        showProgram(id);
        var url = new URL(window.location.href);
        url.searchParams.set('program', id);
        window.history.replaceState({}, '', url.toString());
      });
    });
  }

  /* ---------- Init ---------- */
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  ready(function () {
    initYear();
    initNavScroll();
    initMobileNav();
    initReveal();
    initFaq();
    initLeadModal();
    initBookingPage();
  });
})();
