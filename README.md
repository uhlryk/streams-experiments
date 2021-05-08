# streams-experiments


## Helper classes

### Custom readable stream

Basic readable stream which reads counted sample strings. 

Code is in file `CustomReadableStream.js`

### Custom writable steam

Basic writable stream which console log and count received chunks

Code in file 

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

Without 'data' event but with writable stream

```javascript
emitOnlyOneChunkWithPipe.js`
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

## More complex flow of pure streams

### 1.

Read stream is paused and then pipeline is created with this stream. This changes paused stream to flowing stream. Read method was not executed. 

```javascript
node complex/pauseBeforePipeline.js
```

### 2.

Read stream is piped first and then paused. Now it works as correct paused stream. Read method was not executed. No chunks.

```javascript
node complex/pauseAfterPipelineNoRead.js
```

### 3.

Read stream is piped first and then paused. Now it works as correct paused stream. Read method was executed. One chunk write.

```javascript
node complex/pauseAfterPipeline.js
```

> NOTE:

> PAUSE STREAM AFTER PIPING NOT IN THE MIDDLE 