---
title: Performance Summit
subtitle: Performance Summit is a semi-annual event for software performance enthusiasts interested in learning and speaking about research and development in software performance space.
layout: base
eleventyNavigation:
  key: Home
---

## Events

<div class="card-deck">
{%- for page in collections.event -%}
  <div class="card border-primary">
    <div class="card-body">
        <h5 class="card-title">{{ page.data.title }}</h5>
        <a class="btn btn-primary" href="{{ page.url }}">Learn more</a>
    </div>
    <div class="card-footer">
        <time class="text-muted" datetime="{{ page.date }}">Held on {{ page.date | dateDisplay("LLLL d, y") }}</time>
    </div>
  </div>
{%- endfor -%}
</div>
