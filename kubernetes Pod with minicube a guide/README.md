# Deploying Kubernetes Pod with Minikube on Windows

This guide provides step-by-step instructions on deploying a Kubernetes pod using Minikube on Windows. The configuration files and images included in this folder are based on the original blog post by [Ayesha Ayman](https://medium.com/@ayeshaayman789/deploying-kubernetes-pod-with-minikube-on-windows-64db889d1c8a).

---

## Prerequisites

- Windows OS
- Minikube installed
- kubectl installed

For installation instructions, refer to the official documentation:
- [Minikube Installation](https://minikube.sigs.k8s.io/docs/start/)
- [kubectl Installation](https://kubernetes.io/docs/tasks/tools/)

---

## Steps to Deploy a Kubernetes Pod

### 1. Start Minikube

Run the following command to start Minikube:
```bash
minikube start
```
## Create a YAML Configuration File for the Pod
Create file named pod.yaml that contains the configuration for deploying a sample NGINX pod.
-[pod.yaml](./pod.yaml) that contains the configuration for deploying a sample NGINX pod.

