---
layout: '../../layouts/BlogLayout.astro'
title: 'different types of smart pointer in C++'
publishDate: '04/25/25'
modifiedDate: '04/28/25'
topic: 'programming'
---
## unique ptr
unique ptr works by calling free to raw ptr it holds on its destructor
that way, if u init unique ptr in the stack, it will automaticaly free the raw ptr after going out of scope

the cons of using unique ptr is that it is unique, by that i mean u cant have 2 unique ptr pointing to the same address

```cpp
int main() {
	int n = 0;
	std::unique_ptr p1(&n) 
	std::unique_ptr p2(&n) 
}
```
for example, the codes above will error.

the reason for this is if one of the unique ptr gets destroyed, it will also free the object it holds, but the other unique ptr still pointing to that objects address, that means, the other unique ptr now pointing to freed address and that is no good.

so then, what if you wanna pass the pointer around?
the answer is using shared ptr
## shared ptr
looking at the name, we can guess that shared ptr main feature is sharing
and yes it is
with shared ptr, the mechanism of freeing the pointed object is different than unique ptr

shared ptr holds a reference count.
every time a new shared ptr point to same object, the ref count is incremented
and every time one shared ptr gets destroyed ,the ref count is decremented
if shared ptr gets destroyed and it is the only pointer to the object, then the object is freed 

this is simillar to how garbage collector collects garbage, its by looking at how many the object (or mem address) referenced, and if no one referenced it, it will get collected

