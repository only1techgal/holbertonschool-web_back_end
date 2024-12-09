#!/usr/bin/env python3
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    This is a Asynchronous coroutine that waits for a random delay
    between 0 and max_delay seconds and returns the delay.
    """

    delay = random.uniform(0, max_delay)  # Float between 0 and max_delay
    await asyncio.sleep(delay)  # Pause for the delay period
    return delay
