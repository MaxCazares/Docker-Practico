# K8s Commands

1. Ver todos los recursos en el cluster:
   ```bash
   kubectl get all
   ```

2. Agregar un recurso a partir de un archivo de configuración:
   ```bash
   kubectl apply -f <ruta-del-archivo>
   ```

3. Describir un recurso específico (por ejemplo, un pod):
   ```bash
   kubectl describe <nombre-del-recurso> 
   ```

4. Ver los logs de un recurso específico:
   ```bash
    kubectl logs <nombre-del-recurso>
    ```

5. Acceder a un servicio expuesto en Minikube:
   ```bash
   minikube service <nombre-del-servicio>
   ```

6. Iniciar el contenedor de Minikube:
   ```bash
   minikube start
   ```

7. Reiniciar el contenedor de Minikube:
   ```bash
   minikube stop
   minikube start
   ```
8. Eliminar un recurso específico:
   ```bash
   kubectl rollout restart <nombre-del-recurso>
   ```

9. Eliminar todo el cluster de Minikube:
   ```bash
   minikube delete --all
   ```