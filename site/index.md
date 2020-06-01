---
title: Performance Summit
subtitle: Performance Summit is a semi-annual event for software performance enthusiasts interested in learning and speaking about research and development in software performance space.
layout: base
eleventyNavigation:
  key: Home
---

## Events

<ul class="listing">
{%- for page in collections.event -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a> -
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
  </li>
{%- endfor -%}
</ul>
