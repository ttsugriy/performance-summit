---
layout: base
templateEngineOverride: njk, md
---

<p class="date">
  <time datetime="{{ date }}">{{ date | dateDisplay }}</time>
</p>
<main>
    {{ content | safe }}
</main>
