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
  - title: "Microservices: Single digit microseconds latency"
    presenter: Dmitry Pisklov
    company: Chronicle
    abstract: Optimizing code and infrastructure for ultra-low-latency microservices
    slack_url: https://performancesummithq.slack.com/archives/C018D84DRGT
    youtube_url: https://www.youtube.com/embed/r9HqfBMhyDg
  - title: "Optimising Computer Systems in Complex and Dynamic Parameter Space"
    presenter: Eiko Yoneki
    company: University of Cambridge
    abstract: "Performance tuning of computer systems is challenging for a variety of reasons. Modern computer systems expose many configuration parameters in a complex, massive parameter space. The systems are nonlinear and there is no method for quantifying or modelling such systems by performance tuning to the level of precision required. Furthermore, scheduling of tasks or resource allocation may require the control of dynamically evolving tasks. Auto-tuning has emerged using a black-box optimiser such as Bayesian Optimisation (BO). However, BO has limited scalability. Reinforcement Learning (RL) could be applied for combinatorial optimisation problems, but there is a gap between current research and practical RL deployments. I will introduce our framework to tackle these issues and demonstrate the potential of machine learning based methodologies for computer system optimisation."
    slack_url: https://performancesummithq.slack.com/archives/C0186A1QAA2
    youtube_url: https://www.youtube.com/embed/xzV49q6e5Sw
  - title: "Optimising application performance by automating the data structure selection and tuning process"
    presenter: Michail Basios
    company: Turing Intelligence Technology Ltd.
    abstract: 'Data structure selection and tuning is laborious but can vastly improve an application’s performance and memory footprint. Some data structures share a common interface and enjoy multiple implementations. We introduce Artemis, a multi-objective, cloud-based search-based optimisation framework that automatically finds optimal, tuned data structures and adapts the application to use them. Artemis can achieve substantial performance improvements for various applications and programming languages as we showed in our paper "Darwinian Data Structure Selection". 
In this talk, I will describe how we can tune the performance of applications (execution time, memory consumption, cpu usage) by automatically selecting and tuning their data structures. We will show how we can extract features from code bases and how to tackle them as an optimisation problem using Search based software engineering techniques. We will present a demo of our product (Artemis), and show how we have integrated it in the development pipeline. Last, we will discuss the lack of publicly available performance benchmarks and what can developers do to mitigate this problem.'
    slack_url: https://performancesummithq.slack.com/archives/C017Y9RTVD5
    youtube_url: https://www.youtube.com/embed/JLcpMKbdKLs
  - title: "From manual performance testing to automated performance optimization"
    presenter: Giovanni Gibilisco
    company: Akamas
    abstract: "Online services have become vital for any business and users are lowering their frustration bar getting used to faster applications. Technology, on the other hand, is getting more complex, with new layers like Docker or frameworks like Spark being added to the stack. In this talk, we will present the challenges posed by these new environments and introduce Akamas, our solution that makes use of ML to continuously optimize IT stack configurations to deliver unprecedented application performance, and cost savings.
We will share a case study where we leveraged Akamas integration with open source load testing and monitoring tools to automatically optimize  the performance of a customer core Java service in terms of throughput, response time and resource utilization."
    slack_url: https://performancesummithq.slack.com/archives/C0192SXSU4Q
    youtube_url: https://www.youtube.com/embed/ZAQ530HT56s
  - title: "Production Profiling: What, Why and How"
    presenter: Richard Warburton
    company: Opsian
    abstract: "Everyone wants to understand what their application is really doing in production, but this information is normally invisible to developers. Profilers tell you what code your application is running but few developers profile and mostly on their development environments. Thankfully production profiling is now a practical reality that can help you solve and avoid performance problems.
This pragmatic talk will help you understand the ins and outs of profiling in a production system. You’ll learn about different techniques and approaches that help you understand what’s really happening with your system. This helps you to solve new performance problems, regressions and undertake capacity planning exercises."
    slack_url: https://performancesummithq.slack.com/archives/C018D2912RY
    youtube_url: https://www.youtube.com/embed/P98qUJ3APeQ
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
