---
title: Performance Summit III
date: 2020-05-26
talks:
  - title: "How to be a Performance Badass"
    presenter: Rico Mariani
    company: Facebook
    abstract: The talk will be centered on Do's and Don'ts but focused on individuals and how to be successful in that world.
    slack_url: https://performancesummithq.slack.com/archives/C014NFJD8HF
    youtube_url: https://www.youtube.com/embed/51AMfij2dIA
  - title: "Performance at a Macro Level"
    presenter: Kayvan Najafzadeh
    company: Uber
    abstract: "Better performance of Mobile apps keeps more users engaged and results in achieving business goals.
Often when we talk about performance we look at the problem with a magnifying glass to find every little thing
that might have been contributing to the startup latency of an app. 

In this talk, we will cover how we approached the idea of making UberEats app more performant, created a phased
approach and share the findings. We will include the entire stack - mobile technologies and backend
services - that helped achieve our goals of increasing the performance."
    slack_url: https://performancesummithq.slack.com/archives/C014G2PU1L4
    youtube_url: https://www.youtube.com/embed/qqtUWWvmRmI
  - title: "Using BPF for lightweight Android profiling"
    presenter: Riham Selim
    company: Facebook
    abstract: "BPF gives you the power to understand application performance in ways that were not possible before,
it is the newest tool Mobile Profilers team is using to understand application performance and detect
regressions in Consumption Metrics on Android devices, in this talk we will discuss the powers of
BPF and how we are using for lightweight and dynamic profiling."
    slides_url: slides/BPF%20-%20Perf%20Summit.pdf
    slack_url: https://performancesummithq.slack.com/archives/C0148LN501K
  - title: "Visual Completion measurement on Web"
    presenter: Wooseok Jeong
    company: Facebook
    abstract: "Visual Completion is a new solution of user-centric metrics measurement for RUM (Real-User-Monitoring)
logging. It can track user perceived visual performance of full page loading, in-app navigations and
user interactions. In contrast to most traditional latency measurements like capturing just start and
end time of any task duration, Visual Completion considers display timing of elements at pixel count
level in progressive web-app rendering architecture. In addition to tracking visual performance, we
are also measuring TTI(Time-To-Interactive) to collect performance signals for app responsiveness."
    slides_url: slides/VisualCompletion_slide.pdf
    slack_url: https://performancesummithq.slack.com/archives/C013V9L7823
  - title: "Applying Statistics to Root-Cause Analysis"
    presenter: Karthik Kumar
    company: LightStep
    abstract: "As systems get more complex, reasoning about performance gets more difficult.
Telemetry data emitted by our services is noisy and usually unhelpful in stressful situations.
Distributed Tracing, in particular, can provide rich, contextual data but root-cause analysis
can still be convoluted. In this talk, I'll review a few statistics-based approaches we have
applied to help quickly identify which properties of the system are correlated with performance issues.

In order to support this type of aggregate trace analysis, we need data, but data isn't cheap.
We want to gather only the relevant traces and bias towards traces that have abnormal behavior.
I'll also talk about a few sampling approaches we use for analysis to minimize cost and overhead."
    slides_url: slides/Applying%20Statistics%20to%20Root-Cause%20Analysis.pdf
    slack_url: https://performancesummithq.slack.com/archives/C014A22TCSW
  - title: "FlameCommander: Netflix’s cloud profiler"
    presenter: Martin Spier
    company: Netflix
    abstract: "Even under constant load, the behavior of a system is affected by variance, perturbations,
single-threaded execution and other time-based issues, and never completely uniform, making the
analysis of these small variations a needle-in-a-haystack problem. FlameScope solved this problem
by combining a subsecond-offset heatmap, for navigating a profile and visualizing these perturbations,
with a flame graph for code-path analysis.

This talk focuses on how FlameScope, the open-source profile visualization tool, evolved into FlameCommander,
a full-fledged cloud profiling solution used by thousands of engineers at Netflix."
    slides_url: slides/FlameCommander.pdf
    slack_url: https://performancesummithq.slack.com/archives/C013VCMTGQ7
  - title: "Data Engineering at the Speed of Your Disk"
    presenter: Daniel Lemire
    company: Université du Québec
    abstract: "Our current best disk can read data at speeds of gigabytes per second; the best networks are even faster.
We should aim for data engineering tasks (data filtering, parsing, validation) to achieve similar high speeds.
Bottleneck tasks such as JSON ingestion can be much faster than they currently are."
    slides_url: slides/data_engineering.pdf
    slack_url: https://performancesummithq.slack.com/archives/C01435B85P0

---

- [Event page](https://performancesummitiii.splashthat.com/)
- [Slack channel](https://performancesummithq.slack.com/archives/CU6748V8C)

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