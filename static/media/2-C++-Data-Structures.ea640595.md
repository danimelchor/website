# C++ best data structures for coding interviews

## A list of C++'s most useful data structures and their time complexities for coding interviews.

I am currently a sophomore in college and I've been preparing for Summer 2022 internships. After hours of research and practice regarding data structures, I feel confident sharing the list of data structures I used during my interviews and coding assessments. I hope this list can help you practice land those internships.

### Imports

The import that allows all of these data structures to be implemented easily comes from the stdc++ library. You can import it like so:

```cpp
#import <bits/stdc++.h>
```

### Hash Map - Ordered

If you come from a Python background, hash maps are like dictionaries. They map a key to a value. These data structures are usually very useful to store information that needs to be accessed frequently since they offer `O(1)`(unordered) or `O(log N)`(ordered) time lookups. C++ offers an order and an unordered version of the hash map. They are practically identical except the ordered version is implemented using a self-balancing tree while the unordered version is implemented using buckets.

```cpp
// Constructor - O(1)
map<T key, T value> mp;

// Returns the number of keys in the map - O(1)
mp.size()

// Gets/Sets the value of a key - O(log N)
mp[T key]

// Returns if the key exists in the map - O(log N)
mp.count(T key)

// Returns if the map is empty or not - O(1)
mp.empty()
```

### Hash Map - Unordered

The unordered version of the hash map is usually the one you want to go for. It offers constant time lookups and it comes in very handy when we need to access information quickly. Keep in mind that the implementation of this data structure is a bit more complex so the constant factor is quite high for small inputs (so ordered will be faster), but when it comes to larger inputs the unordered version will be much faster.

```cpp
// Constructor
unordered_map<T key, T value> mp;

// Returns the number of keys in the map - O(1)
mp.size()

// Gets/Sets the value of a key - O(1)
mp[T key]

// Returns if the key exists in the map - O(1)
mp.count(T key)

// Returns if the map is empty or not - O(1)
mp.empty()
```

### Set - Ordered

Sets are a unique list of immutable values. Sets, as well as hash maps, offer very quick lookups and are very useful to access stored information. Ordered sets are slower than unordered sets but keep the items inside them sorted.

```cpp
// Constructor
set<T value> s;

// Checks if value is in set - O(log N)
s.count(T value)

// Inserts value into set - O(log N)
s.insert(T value)

// Erases value from set - O(log N)
s.erase(T value)

// Returns if the set is empty - O(1)
s.empty()

// Returns the size of the set - O(1)
s.size()
```

### Set - Unordered

This version of the set is much faster for larger inputs and it's probably the one you want to be using most of the time.

```cpp
// Constructor
unordered_set<T value> s;

// Checks if value is in set - O(1)
s.count(T value)

// Inserts value into set - O(1)
s.insert(T value)

// Erases value from set - O(1)
s.erase(T value)

// Returns if the set is empty - O(1)
s.empty()

// Returns the size of the set - O(1)
s.size()
```

### Stack

Stacks follow LIFO (Last In First Out). They are very useful data structures for problems like DFS where we want to access items in the reverse order we added them. They are usually implemented using a deque.

```cpp
// Constructor
stack<T values> s;

// Adds an element to top of stack - O(1)
s.push(T val)

// Removes the element at top of stack - O(1)
s.pop()

// Returns element at top of stack - O(1)
s.top()

// Returns if the stack is empty - O(1)
s.empty()

// Returns the size of the stack - O(1)
s.size()
```

### Queue

Queues follow FIFO (First In First Out). They are very useful data structures for problems like BFS where we want to access items in the a queue fashion keeping the order in which we added them.

```cpp
// Constructor
queue<T values> q;

// Adds an element to back of queue - O(1)
q.push(T val)

// Removes the first element of queue - O(1)
q.pop()

// Returns element at front of queue - O(1)
q.front()

// Returns element at end of queue - O(1)
q.back()

// Returns if the queue is empty - O(1)
q.empty()

// Returns the size of the queue - O(1)
q.size()
```

### Priority Queue - Min Heap

Priority queues allow us to access the min(or max) values of a collection of elements very quickly. They also allow for a quick insertion and deletion of elements without having to re-sort the whole collection.

```cpp
// Constructor
priority_queue<T, vector<T>, greater<T>> pq;

// Adds an element to queue - O(log N)
pq.push(T val)

// Removes the element at top of queue (min) - O(log N)
pq.pop()

// Returns element at top of queue (min) - O(1)
pq.top()

// Returns if the queue is empty - O(1)
pq.empty()

// Returns the size of the queue - O(1)
pq.size()
```

### Priority Queue - Max Heap

See above.

```cpp
// Constructor
priority_queue <T> pq;

// Adds an element to queue - O(log N)
pq.push(T val)

// Removes the element at top of queue (max) - O(log N)
pq.pop()

// Returns element at top of queue (max) - O(1)
pq.top()

// Returns if the queue is empty - O(1)
pq.empty()

// Returns the size of the queue - O(1)
pq.size()
```

### Linked Lists

Very useful data structures for list of elements of unknown size that follow a chain-like structure (a -> b -> c -> d).

```cpp
class Node {
public:
    T data;
    Node* next;
};
```

### Doubly Linked Lists

Similar to linked lists, doubly linked lists "chain" together a collection of elements. In addition to the next element in the list, doubly linked lists offer access to the predecessor of the node in the list like so: a <-> b <-> c <-> d.

```cpp
class Node {
public:
    T data;
    Node* next;
    Node* prev;
};
```
