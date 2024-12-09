#!/usr/bin/env python3
"""
This module defines a function `task_wait_n` that creates multiple tasks
using the `task_wait_random` function and returns their
results in ascending order.
"""

import asyncio
from typing import List
from tasks_ import task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns `task_wait_random` n times with the specified max_delay and
    returns the list of all delays in ascending order.

    Args:
        n (int): The number of tasks to spawn.
        max_delay (int): The maximum delay for each task.

    Returns:
        List[float]: A list of delays in ascending order.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = []

    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
