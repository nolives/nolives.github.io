---
layout: default
title: Home
description: A personal portfolio for nolives.
permalink: /
---

<section class="home-intro" aria-labelledby="page-title">
  <p class="eyebrow">PERSONAL PORTFOLIO <span class="eyebrow-divider" aria-hidden="true">/</span> <span class="eyebrow-year">{{ site.time | date: "%Y" }}</span></p>
  <h1 id="page-title">Hi, I’m Nick.</h1>
  <p class="intro-copy">[Add a short introduction about your work and professional focus from your résumé or LinkedIn About text.]</p>
  <p class="placeholder-note"><span class="note-mark" aria-hidden="true">i</span> This draft uses placeholders until you provide your résumé.</p>

  <nav class="home-links" aria-label="Explore the portfolio">
    <a class="text-link" href="{{ '/about/' | relative_url }}">About <span aria-hidden="true">↗</span></a>
    <a class="text-link" href="{{ '/contact/' | relative_url }}">Contact <span aria-hidden="true">↗</span></a>
  </nav>
</section>

<section class="content-section selected-work" aria-labelledby="selected-work-title">
  <div class="section-heading">
    <p class="eyebrow">01 <span class="eyebrow-divider" aria-hidden="true">/</span> PROJECTS</p>
    <h2 id="selected-work-title">Selected work</h2>
  </div>
  <div class="project-grid">
    <article class="project-card">
      <p class="project-language">Python</p>
      <h3><a href="https://github.com/nolives/personal-wiki" target="_blank" rel="noopener noreferrer">personal-wiki <span aria-hidden="true">↗</span></a></h3>
      <p>Personal study wiki using a local Gemma 4 E4B model, BM25 retrieval, an Obsidian vault, and offline evidence.</p>
    </article>
    <article class="project-card">
      <p class="project-language">HTML</p>
      <h3><a href="https://github.com/nolives/custom-llm" target="_blank" rel="noopener noreferrer">custom-llm <span aria-hidden="true">↗</span></a></h3>
      <p>Course project training a tiny nanoGPT model on a chosen corpus, evaluating it against 48 fixed language tests, and trying it through a simple chat interface.</p>
    </article>
    <article class="project-card">
      <p class="project-language">Jupyter Notebook</p>
      <h3><a href="https://github.com/nolives/mspacman-agent" target="_blank" rel="noopener noreferrer">mspacman-agent <span aria-hidden="true">↗</span></a></h3>
      <p>DQN agent trained on Atari Ms. Pac-Man, with evaluation evidence and a project write-up.</p>
    </article>
    <article class="project-card">
      <p class="project-language">TypeScript</p>
      <h3><a href="https://github.com/nolives/networkingtracker" target="_blank" rel="noopener noreferrer">networkingtracker <span aria-hidden="true">↗</span></a></h3>
      <p>Secure networking tracker built with React, Express, Neon Postgres, and Better Auth.</p>
    </article>
  </div>
</section>

<section class="content-section home-about" aria-labelledby="home-about-title">
  <div class="section-heading">
    <p class="eyebrow">02 <span class="eyebrow-divider" aria-hidden="true">/</span> ABOUT</p>
    <h2 id="home-about-title">A little more</h2>
  </div>
  <p class="section-copy">A short bio will make this portfolio yours. For now, those details are intentionally left as placeholders.</p>
  <a class="text-link" href="{{ '/about/' | relative_url }}">Read the about page <span aria-hidden="true">→</span></a>
</section>