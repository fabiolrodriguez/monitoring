# Example Prometheus monitoring

This is a collection of studies about monitoring, aka Prometheus + Grafana + Alertmanager.

There is a sample nodejs app getting app  metrics.

## Running Prometheus

usage:

```
docker run --name prometheus --rm  -d -p 9090:9090 -v ./monitoring/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml  prom/prometheus
```