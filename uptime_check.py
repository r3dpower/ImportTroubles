#!/bin/python3
import time

with open("/proc/uptime") as f:
    uptime_seconds = float(f.read().split()[0])
    print(f"[CRON] Container uptime: {uptime_seconds:.2f} seconds (checked at {time.ctime()})")
