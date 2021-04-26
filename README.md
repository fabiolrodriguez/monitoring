# Example Prometheus monitoring

This is a collection of studies about monitoring, aka Prometheus + Grafana + Alertmanager.

There is a sample nodejs app getting app  metrics.

## Running local Environment

usage:

```
docker-compose up -d
```

## Node exporter

Download desired version:

```
wget https://github.com/prometheus/node_exporter/releases/download/v1.1.2/node_exporter-1.1.2.linux-amd64.tar.gz
```

Untar and Run

```
tar -xvfz node_exporter-1.1.2.linux-amd64.tar.gz
cd node_exporter-1.1.2.linux-amd64.tar.gz
./node_exporter &
```

## Grafana Dashboard

Import the alert dashboard located in folder ./grafana-data/dashboards/

![dashboard](alerts-dashboard.png)

## Prometheus Configs

There is some fake Linux hosts  on prometheus.yaml to generate service_down alerts.

```
- job_name: node
  honor_timestamps: true
  scrape_interval: 30s
  scrape_timeout: 10s
  metrics_path: /metrics
  scheme: http
  static_configs:
  - targets:
    - 192.168.0.18:9100
    - 192.168.0.19:9100
    - 192.168.0.20:9100
    - 192.168.0.21:9100
```
When you add node_exporter to some server, just add in this section.