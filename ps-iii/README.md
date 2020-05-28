# [Performance Summit III (virtual)](https://performancesummitiii.splashthat.com/)
- [Slack channel](https://performancesummithq.slack.com/archives/CU6748V8C)

## Talks
### “Using BPF for lightweight Android profiling” by Riham Selim (Facebook)

BPF gives you the power to understand application performance in ways that were not possible before,
it is the newest tool Mobile Profilers team is using to understand application performance and detect
regressions in Consumption Metrics  on Android devices, in this talk we will discuss the powers of
BPF and how we are using for lightweight and dynamic profiling.

- [slides](slides/BPF%20-%20Perf%20Summit.pdf)

### “Visual Completion measurement on Web” by Wooseok Jeong (Facebook)

Visual Completion is a new solution of user-centric metrics measurement for RUM(Real-User-Monitoring)
logging. It can track user perceived visual performance of full page loading, in-app navigations and
user interactions. In contrast to most traditional latency measurements like capturing just start and
end time of any task duration, Visual Completion considers display timing of elements at pixel count
level in progressive web-app rendering architecture. In addition to tracking visual performance, we
are also measuring TTI(Time-To-Interactive) to collect performance signals for app responsiveness.

- [slides](slides/VisualCompletion_slide.pdf)

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
