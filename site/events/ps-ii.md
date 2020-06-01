---
title: Performance Summit II
date: 2019-10-29
talks:
  - title: Intro
    presenter: Taras Tsugrii
    youtube_url: https://www.youtube.com/embed/-jyM9eHLo74
    abstract: Welcome speach, event stats and agenda intro
    company: Facebook
  - title: Static performance analysis with Infer
    presenter: Ezgi Çiçek
    youtube_url: https://www.youtube.com/embed/-sqdJbvqeNQ
    abstract: The talk showcases some of the ways Infer is used at Facebook to flag performance regressions
    company: Facebook
  - title: BPF at Facebook
    presenter: Alexei Starovoitov
    youtube_url: https://www.youtube.com/embed/ZYBXZFKPS28
    company: Facebook
  - title: FB Android On-DeviceCompilation
    presenter: Mikey Rutherford
    company: Facebook
  - title: "MobileBoost: optimizations for critical sections"
    presenter: Oleksandr Stashuk
    youtube_url: https://www.youtube.com/embed/dyBg5MmI4pA
    company: Facebook
  - title: “Challenges in iOS performance engineering”
    presenter: Gunnar Kudrjavets
    youtube_url: https://www.youtube.com/embed/zdxvxZAUhbI
    company: Facebook
  - title: “Performance Lab”
    presenter: Anshuman Chadha
    youtube_url: https://www.youtube.com/embed/gnTs1FTQo-8
    company: Facebook
  - title: “A Single Story Of Noise”
    presenter: "Hai Huang and Huasong Cao"
    company: Google
  - title: "Personalizing performance: How LinkedIn uses AI to optimize performance for every member"
    presenter: Prasanna Vijayanathan, Nitin Pasumarthy, Praveen Krishna
    youtube_url: https://www.youtube.com/embed/4A13Pzal8Hg
    company: LinkedIn
  - title: “Faster Updates for LinkedIn @ Bing”
    presenter: David Schachter
    youtube_url: https://www.youtube.com/embed/cYs1aYVNUoQ
    company: LinkedIn
  - title: “Signal boosting”
    presenter: Xiangpeng Zhao
    youtube_url: https://www.youtube.com/embed/90wiDt2onoM
    company: Facebook
  - title: “Beyond Performance Testing”
    presenter: Charles Lin
    company: Amazon
  - title: “Performance is a shape, not a number”
    presenter: Alex Kehlenbeck
    company: LightStep
    youtube_url: https://www.youtube.com/embed/EG7Zhd6gLiw
  - title: "Closing remarks"
    presenter: Taras Tsugrii
    youtube_url: https://www.youtube.com/embed/pDBqpDH2qL4
    company: Facebook
---

## Talks

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 mb-4">
{%- for talk in talks -%}
  <div class="card">
    <div class="embed-responsive embed-responsive-16by9">
        <iframe
            class="embed-responsive-item"
            width="560"
            height="315"
            src="{{ talk.youtube_url }}"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div>
    <div class="card-header">{{ talk.title }}</div>
    <div class="card-body">
        <div class="card-text">{{ talk.abstract }}</div>
    </div>
    <div class="card-footer">by {{ talk.presenter }} ({{ talk.company }})</div>
  </div>
{%- endfor -%}
</div>

- [Youtube playlist](https://www.youtube.com/playlist?list=PLkBzZYJWYzWsbI6sQnqKYF_YEupsdnxIi)
- [Slack channel](https://performancesummithq.slack.com/archives/C014S1L1GL9)
