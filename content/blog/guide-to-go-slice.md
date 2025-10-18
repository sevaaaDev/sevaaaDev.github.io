+++
date = '2025-10-13T09:33:53+07:00'
draft = true
title = 'Guide to Go Slice'
+++

## Slice is just a struct
```Go
type IntSlice struct {
    realArray *[...]int // this isnt valid Go, but think of [...] as any size array
    startIndex int
    len int
    cap int
}

func (s *IntSlice) at(index int) int {
    return s.realArray[startIndex+index]
}
```
Because a slice is just an internal struct that access another array, when you pass it to a function, its still referring to the same underlying array. And it will always do that unless you create a copy of that underlying array.

## append() may modify the struct
Wonder why you need to assign the return value of `append()` to your slice variable? well thats because `append()` modify the struct. your slice struct is passed by value, this mean the `append()` func got a copy of it (copy of the struct). When you append something, the underlying array might not have enough capacity, therefore the `append()` func may allocate new array that has enough capacity and set the slice struct to point to that new allocated array. Because the slice struct is a copy of yours, it needs to be returned to the caller (you), and you need to assign that new struct to your slice variable

## Passing slice is cheap
You never need to pass a slice pointer because slice is a small struct. Something to keep in mind is that slice will behave similar to a pointer, whether you pass it as pointer or not. Thus be careful when modifying a slice.

## Key points
- Slice is just a struct that holds a pointer to an underlying array. 
- Passing a struct mean passing an array pointer
- `append()` may modify a struct, this is why you have to reassign your variable with its return value

