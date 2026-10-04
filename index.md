---
layout: default
title: Home
description: A personal portfolio for nolives.
permalink: /
---

<section class="home-intro" aria-labelledby="page-title">
  <p class="eyebrow">PERSONAL PORTFOLIO <span class="eyebrow-divider" aria-hidden="true">/</span> <span class="eyebrow-year">{{ site.time | date: "%Y" }}</span></p>
  <h1 id="page-title">Hi, I’m <span class="placeholder">[Your name]</span>.</h1>
  <p class="intro-copy">[Add a short introduction about your work and professional focus from your résumé or LinkedIn About text.]</p>
  <p class="placeholder-note"><span class="note-mark" aria-hidden="true">i</span> This draft uses placeholders until you provide your résumé.</p>

  <nav class="home-links" aria-label="Explore the portfolio">
    <a class="text-link" href="{{ '/about/' | relative_url }}">About <span aria-hidden="true">↗</span></a>
    <a class="text-link" href="{{ '/experience/' | relative_url }}">Work experience <span aria-hidden="true">↗</span></a>
    <a class="text-link" href="{{ '/contact/' | relative_url }}">Contact <span aria-hidden="true">↗</span></a>
  </nav>
</section>

<section class="content-section selected-work" aria-labelledby="selected-work-title">
  <div class="section-heading">
    <p class="eyebrow">01 <span class="eyebrow-divider" aria-hidden="true">/</span> WORK</p>
    <h2 id="selected-work-title">Selected work</h2>
  </div>
  <p class="placeholder-copy">[Projects will be added here only if you provide their details.]</p>
</section>

<section class="content-section home-about" aria-labelledby="home-about-title">
  <div class="section-heading">
    <p class="eyebrow">02 <span class="eyebrow-divider" aria-hidden="true">/</span> ABOUT</p>
    <h2 id="home-about-title">A little more</h2>
  </div>
  <p class="section-copy">A short bio and verified work history will make this portfolio yours. For now, those details are intentionally left as placeholders.</p>
  <a class="text-link" href="{{ '/about/' | relative_url }}">Read the about page <span aria-hidden="true">→</span></a>
</section>