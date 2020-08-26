---
title: Performance Summit London Edition
date: 2020-08-06
talks:
  - title: "Benchmarking in the Cloud - 50K transactions per second"
    presenter: Arun George John
    company:
    abstract: "Running massive product benchmarks in the Cloud can be challenging - It pushes the limits of application & platform performance, driving out unforeseen issues and the need for new solutions. This talk seeks to share insights from running one of the largest benchmarks in the banking product space, for a solution architected on a mix of technologies - AWS ECS, Microservices, Kinesis, Lambda, NuoDB, DynamoDB."
    slack_url: https://performancesummithq.slack.com/archives/C01869YV7V4
    youtube_url: https://www.youtube.com/embed/AUWUmhL2UjY
---

- [Event page](https://performancesummitle.splashthat.com/)
- [Slack channel](https://performancesummithq.slack.com/archives/CU674PFRA)

## Talks

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 mb-4">
{%- for talk in talks -%}
  <div class="card">
    <div class="card-header">{{ talk.title }}</div>
    <div class="card-body">
        {%- if talk.youtube_url -%}
          <div class="embed-responsive embed-responsive-16by9">
              <iframe
                  class="embed-responsive-item"
                  width="560"
                  height="315"
                  src="{{ talk.youtube_url | url }}"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
              </iframe>
          </div>
        {%- endif -%}
        <div class="card-text">{{ talk.abstract }}</div>
        {%- if talk.slides_url -%}
            <a href="{{ talk.slides_url | url }}">Slides</a>
        {%- endif -%}
        <a href="{{ talk.slack_url | url }}"><img width="64" src="https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-199wkt/Slack_Mark.svg"></img></a>
    </div>
    <div class="card-footer">by {{ talk.presenter }} ({{ talk.company }})</div>
  </div>
{%- endfor -%}
</div>
