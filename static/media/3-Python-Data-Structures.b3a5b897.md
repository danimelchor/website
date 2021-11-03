# Python's best data structures for coding interviews

## A list of Python's most useful data structures and their time complexities for coding interviews.

I am currently a sophomore in college and I've been preparing for Summer 2022 internships. After hours of research and practice regarding data structures, I feel confident sharing the list of data structures I used during my interviews and coding assessments. I hope this list can help you practice land those internships.

### Dictionary

```python
# Constructor - O(1)
mp = {}

# Returns the number of keys in the dict - O(1)
len(mp)

# Gets/Sets the value of a key - O(1)
mp[key]

# Returns if the key exists in the dict - O(1)
key in mp

# Deletes key from dict - O(1)
del mp[key]

# Deletes all keys from dictionary - O(1)
mp.clear()

# Returns a list of keys - O(N)
mp.keys()

# Returns a list of tuples (key, value) - O(N)
mp.items()
```

### Set

```python
# Constructor
s = set()

# Returns the size of the set - O(1)
len(s)

# Inserts value into set - O(1)
s.add(value)

# Checks if value is in set - O(1)
value in s

# Erases value from set - O(1)
s.remove(value)

# Deletes all items from set - O(1)
s.clear()
```

### Stack

```python
# Necessary import
from collections import deque

# Constructor
s = deque()

# Adds an element to top of stack - O(1)
s.append(val)

# Removes the element at top of stack - O(1)
s.pop()

# Returns element at top of stack - O(1)
s[-1]
```

### Queue

```python
# Necessary import
from collections import deque

# Constructor
s = deque()

# Adds an element to back of queue - O(1)
q.append(val)

# Returns the queue size - O(1)
q.popleft()

# Returns element at front of queue - O(1)
s[0]
```

### Priority Queue - Min Heap

```python
# Import
from heapq import heapify, heappush, heappop

# Constructor
pq = [...]
heapify(pq)

# Adds an element to queue - O(log N)
heappush(pq, val)

# Removes the element at top of queue (min) - O(log N)
heappop(pq)

# Returns element at top of queue (min) - O(1)
pq[0]
```

### Linked Lists

```python
class Node:
    def __init__(self, _val, _next=None):
        self.val = _val
        self.next = _next
```
