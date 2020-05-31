---
title: Performance Summit III
tags: post
---

# [Performance Summit III (virtual)](https://performancesummitiii.splashthat.com/)

- [Slack channel](https://performancesummithq.slack.com/archives/CU6748V8C)

## Talks

### “Using BPF for lightweight Android profiling” by Riham Selim (Facebook)

BPF gives you the power to understand application performance in ways that were not possible before,
it is the newest tool Mobile Profilers team is using to understand application performance and detect
regressions in Consumption Metrics on Android devices, in this talk we will discuss the powers of
BPF and how we are using for lightweight and dynamic profiling.

- [slides](slides/BPF%20-%20Perf%20Summit.pdf)
- [Slack channel](https://performancesummithq.slack.com/archives/C0148LN501K)

### “Visual Completion measurement on Web” by Wooseok Jeong (Facebook)

Visual Completion is a new solution of user-centric metrics measurement for RUM(Real-User-Monitoring)
logging. It can track user perceived visual performance of full page loading, in-app navigations and
user interactions. In contrast to most traditional latency measurements like capturing just start and
end time of any task duration, Visual Completion considers display timing of elements at pixel count
level in progressive web-app rendering architecture. In addition to tracking visual performance, we
are also measuring TTI(Time-To-Interactive) to collect performance signals for app responsiveness.

- [slides](slides/VisualCompletion_slide.pdf)
- [Slack channel](https://performancesummithq.slack.com/archives/C013V9L7823)

### “Applying Statistics to Root-Cause Analysis” - Karthik Kumar (Lightstep)

As systems get more complex, reasoning about performance gets more difficult.
Telemetry data emitted by our services is noisy and usually unhelpful in stressful situations.
Distributed Tracing, in particular, can provide rich, contextual data but root-cause analysis
can still be convoluted. In this talk, I'll review a few statistics-based approaches we have
applied to help quickly identify which properties of the system are correlated with performance issues.

In order to support this type of aggregate trace analysis, we need data, but data isn't cheap.
We want to gather only the relevant traces and bias towards traces that have abnormal behavior.
I'll also talk about a few sampling approaches we use for analysis to minimize cost and overhead.

- [slides](slides/Applying%20Statistics%20to%20Root-Cause%20Analysis.pdf)
- [Slack channel](https://performancesummithq.slack.com/archives/C014A22TCSW)

### “FlameCommander: Netflix’s cloud profiler” by Martin Spier (Netflix)

Even under constant load, the behavior of a system is affected by variance, perturbations,
single-threaded execution and other time-based issues, and never completely uniform, making the
analysis of these small variations a needle-in-a-haystack problem. FlameScope solved this problem
by combining a subsecond-offset heatmap, for navigating a profile and visualizing these perturbations,
with a flame graph for code-path analysis.

This talk focuses on how FlameScope, the open-source profile visualization tool, evolved into FlameCommander,
a full-fledged cloud profiling solution used by thousands of engineers at Netflix.

- [slides](slides/FlameCommander.pdf)
- [Slack channel](https://performancesummithq.slack.com/archives/C013VCMTGQ7)

### “Data Engineering at the Speed of Your Disk” by Daniel Lemire (Université du Québec)

Our current best disk can read data at speeds of gigabytes per second; the best networks are even faster.
We should aim for data engineering tasks (data filtering, parsing, validation) to achieve similar high speeds.
Bottleneck tasks such as JSON ingestion can be much faster than they currently are.

- [slides](slides/data_engineering.pdf)
- [Slack channel](https://performancesummithq.slack.com/archives/C01435B85P0)
