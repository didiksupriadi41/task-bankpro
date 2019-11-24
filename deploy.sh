chmod 400 $AWS_VM_PEM
ssh -o "StrictHostKeyChecking=no" -i $AWS_VM_PEM $AWS_VM_user@$AWS_VM_ip "rm -rf bank-pro && mkdir bank-pro"
scp -o "StrictHostKeyChecking=no" -i $AWS_VM_PEM -r build $AWS_VM_user@$AWS_VM_ip:~/bank-pro
scp -o "StrictHostKeyChecking=no" -i $AWS_VM_PEM app.config.json $AWS_VM_user@$AWS_VM_ip:~/bank-pro
ssh -o "StrictHostKeyChecking=no" -i $AWS_VM_PEM $AWS_VM_user@$AWS_VM_ip "bash" < ./run.sh

