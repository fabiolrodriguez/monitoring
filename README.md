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
