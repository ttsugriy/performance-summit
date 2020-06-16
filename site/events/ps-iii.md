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
  - title: "Data Engineering at the Speed of Your Disk"
    presenter: Daniel Lemire
    company: Université du Québec
    abstract: "Our current best disk can read data at speeds of gigabytes per second; the best networks are even faster.
We should aim for data engineering tasks (data filtering, parsing, validation) to achieve similar high speeds.
Bottleneck tasks such as JSON ingestion can be much faster than they currently are."
    slides_url: slides/data_engineering.pdf
    slack_url: https://performancesummithq.slack.com/archives/C01435B85P0
    youtube_url: https://www.youtube.com/embed/p6X8BGSrR9w
  - title: "Performance Testing for Firebase Cloud Messaging Backend"
    presenter: Zijian Yao
    company: Firebase/Google
    abstract: "Firebase Cloud Messaging (FCM), formerly known as Google Cloud Messaging,  is a cross-platform messaging solution to send notification to client apps. Performance testing for the messaging backend is a challenging problem in different aspects like networking, authentication, etc. In this talk I will cover the challenges of and best practice applied to the FCM performance testing infrastructure and how FCM developers use it for different testing purposes."
    slack_url: https://performancesummithq.slack.com/archives/C01439PLQ30
    youtube_url: https://www.youtube.com/embed/1GwZGF9xadk
  - title: "Understanding Kernel Scheduling Behavior with SchedViz"
    presenter: Lee Baugh
    company: Google
    abstract: "Kernel scheduling can be a significant source of latency problems: when a thread isn't running, it can't service requests or do anything else. SchedViz is a newly-open-sourced tool that provides fine-grained visibility into kernel scheduling behavior, and, increasingly, into other kernel phenomena as well.  This talk will provide a brief walk-through of SchedViz, including how it works and what we used it for."
    slack_url: https://performancesummithq.slack.com/archives/C0148L49L5T
    youtube_url: https://www.youtube.com/embed/tbR8A6kRSYA
  - title: "Solving Reliability Challenges with Blackbox"
    presenter: Phuong Nguyen
    company: Facebook
    abstract: "Blackbox is a mobile instrumentation framework designed to capture context leading up to an error site. In this talk, we discuss how Facebook is using Blackbox to tackle functional bugs and crashes in our apps."
    slack_url: https://performancesummithq.slack.com/archives/C014A81FQQ3
    youtube_url: https://www.youtube.com/embed/3ZwBcHsvv8Q
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
    youtube_url: https://www.youtube.com/embed/HCYsLftO9bQ
  - title: "Applying Statistics to Root-Cause Analysis"
    presenter: Karthik Kumar
    company: Lightstep
    abstract: "As systems get more complex, reasoning about performance gets more difficult. Telemetry data emitted by our services is noisy and usually unhelpful in stressful situations. Distributed Tracing, in particular, can provide rich, contextual data but root-cause analysis can still be convoluted. In this talk, I'll review a few statistics-based approaches we have applied to help quickly identify which properties of the system are correlated with performance issues.
In order to support this type of aggregate trace analysis, we need data, but data isn't cheap. We want to gather only the relevant traces and bias towards traces that have abnormal behavior. I'll also talk about a few sampling approaches we use for analysis to minimize cost and overhead."
    slides_url: slides/Applying%20Statistics%20to%20Root-Cause%20Analysis.pdf
    slack_url: https://performancesummithq.slack.com/archives/C014A22TCSW
    youtube_url: https://www.youtube.com/embed/HqEIWfAARJY
  - title: "Uplevelling Understanding with Transient Analysis"
    presenter: George Hoffman
    company: Facebook
    abstract: "Performance on mobile devices is often heavily dependent on the efficient use of shared resources like network bandwidth and RAM and orchestration between disparate components that rely on them. Understanding the (often surprising) conditions that arise “in the wild,” their prevalence along your user population, and therefore how client code should optimally adapt to perform best under various transient conditions is very challenging.
Transient Analysis is a methodology and toolset we’ve built to enable this type of understanding by modeling expected domain-specific behaviors, processing telemetry to characterize adherence to or divergence from these expectations at scale, and linking this analysis to actionable insights and visualizations of actual examples of problematic behavior. This session will walk through the development lifecycle of such an analysis and demo the tooling that enables it."
    slack_url: https://performancesummithq.slack.com/archives/C013VCL0B8F
    youtube_url: https://www.youtube.com/embed/Ni8uIniyu90
  - title: "The Sociotechnical Path to High-Performing Teams (Begins With Observability)"
    presenter: Charity Majors
    company: Honeycomb
    abstract: "\"Observability\" is everywhere these days, but what does it actually mean?  Is it just a new marketing term for the same old monitoring we've always done?  Are there three pillars, or no pillars?  It's enough to make anyone cranky and cynical about the motives of those involved.  I'll give a brief history of observability and control systems theory, make a pitch for the precise technical definition of observability, and explain how it differs from monitoring and other telemetry -- and why it has recently suddenly become so shudderingly relevant to us all.  I will discuss the second-order technical implications and effects of the definition I espouse, and describe the characteristics of tools we must build to understand the systems of tomorrow.  We are far behind where we should be as a profession when it comes to how much of our effort is wasted on crap that doesn't move the business forward, and this is in large part because our ability to understand our systems is so wretched -- and we don't even know it.  Let's fix that."
    slack_url: https://performancesummithq.slack.com/archives/C014G7M88P6
    youtube_url: https://www.youtube.com/embed/BsYIvi3Sae8
  - title: "Using BPF for lightweight Android profiling"
    presenter: Riham Selim
    company: Facebook
    abstract: "BPF gives you the power to understand application performance in ways that were not possible before,
it is the newest tool Mobile Profilers team is using to understand application performance and detect
regressions in Consumption Metrics on Android devices, in this talk we will discuss the powers of
BPF and how we are using for lightweight and dynamic profiling."
    slides_url: slides/BPF%20-%20Perf%20Summit.pdf
    slack_url: https://performancesummithq.slack.com/archives/C0148LN501K
    youtube_url: https://www.youtube.com/embed/Vjb3qHem8io
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
    youtube_url: https://www.youtube.com/embed/L58GrWcrD00
  - title: "Faster Data-Center Apps with BOLT"
    presenter: Maksim Panchenko
    company: Facebook
    abstract: "Code-layout optimizations are paramount for optimal performance of large data-center applications. In this talk, I will cover multiple approaches to improve the code layout of an application, introduce an open-source binary optimization tool BOLT, and walk through the challenges of deploying it at a Facebook scale. Lastly, I will share the plans for seamless integration of the binary optimization technology into the server application space."
    slack_url: https://performancesummithq.slack.com/archives/C0148PHK6J1
    youtube_url: https://www.youtube.com/embed/nPSxaUZjZC0

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
