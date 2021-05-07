# streams-experiments


## Custom readable stream

Basic readable stream which reads counted sample strings. 

Code is in file `createReadableStream.js`


## A few examples of custom readable stream in paused mode

### 1.

When no read actions, 'data' event will never happens

```javascript
node paused/noChunks.js 
```

### 2.
When only one read action after timeout, there is one 'data' event, and chunk contain only one pushed sample. Which shows that
readable stream is waiting for first 'read' before it starts generating data

```javascript
node paused/emitOnlyOneChunk.js
```

### 3.

When we have multiple read actions, then  chunk from event 'data' from first action contains only first pushed sample. But next events contains multiple samples. This shows that readable stream is not waiting with generating data for next read actions but it is doing this all the time. We control when next chunk is emitted but no how data is genarated.

```javascript
node paused/emitSomeChunks.js
```

### 4. 

If we remove all listeners and just after it we invoke pause and add 'data' listener again. It shows specific behavior: each new 'data' listener gets imediately event with chunk that contains one new generated sample. 


```javascript
node paused/emitSomeChunksAndControlPushes.js
```