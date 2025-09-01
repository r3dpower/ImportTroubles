# 🕵️‍♂️ Import Troubles – A Node.js CTF Challenge
Welcome to **Import Troubles**, a Capture The Flag (CTF) challenge created to help security enthusiasts, bug bounty hunters, and students learn about **Server-Side Request Forgery (SSRF)**, **path traversal**, and how these issues can escalate into **Remote Code Execution (RCE)**.
This challenge is packaged inside a Docker container, so anyone can easily spin it up and start hacking! 🚀

---

## ⚙️ Requirements

- Linux machine  
- [Docker](https://docs.docker.com/get-docker/) installed and running  

---

## 🎯 Challenge Goal
Your mission: Achieve Remote Code Execution (RCE) on the target server.

The vulnerable application simulates a file import feature that allows fetching external resources. However, improper validation introduces multiple attack surfaces you can exploit.

## 🧩 Learning Objectives

By working on this challenge, you’ll learn to:

Identify and exploit SSRF vulnerabilities

Abuse path traversal to write arbitrary files

Chain misconfigurations into Remote Code Execution (RCE)

## 🚀 Setup Instructions

1. Clone this repository:

   ```bash
   git clone https://github.com/r3dpower/ImportTroubles.git
   cd ImportTroubles

2. Build the Docker image:

sudo docker build -t import_troubles_chux .

3. Run the container:
sudo docker run --rm -d --network host import_troubles_chux

4. The challenge will now be available on http://localhost:1337


Happy hacking! 🐱‍💻
