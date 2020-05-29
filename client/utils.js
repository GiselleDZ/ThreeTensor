export function checkUserMediaError() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    return new Error(
      'Browser API navigator.mediaDevices.getUserMedia not available'
    )
  }
  return null
}

export function getMediaStreamConstraints(facingMode, frameRate) {
  return {
    audio: false,
    video: {
      facingMode,
      frameRate
    }
  }
}

export function getConfidentPoses(poses, minPoseConfidence, minPartConfidence) {
  return poses.filter(({score}) => score > minPoseConfidence).map(pose => ({
    ...pose,
    keypoints: pose.keypoints.filter(({score}) => score > minPartConfidence)
  }))
}

export function drawKeypoints(ctx, keypoints) {
  keypoints.forEach(({position}) => {
    const {x, y} = position
    ctx.beginPath()
    ctx.arc(x, y, 5, 0, 2 * Math.PI, false)
    ctx.fillStyle = 'aqua'
    ctx.fill()
  })
}

// export function drawKeyPoints(
//   keypoints,
//   minConfidence,
//   skeletonColor,
//   canvasContext,
//   scale = 1
// ) {
//   keypoints.forEach(keypoint => {
//     if (keypoint.score >= minConfidence) {
//       const {x, y} = keypoint.position
//       canvasContext.beginPath()
//       canvasContext.arc(x * scale, y * scale, pointRadius, 0, 2 * Math.PI)
//       canvasContext.fillStyle = skeletonColor
//       canvasContext.fill()
//     }
//   })
// }

// function drawSegment(
//   [firstX, firstY],
//   [nextX, nextY],
//   color,
//   lineWidth,
//   scale,
//   canvasContext
// ) {
//   canvasContext.beginPath()
//   canvasContext.moveTo(firstX * scale, firstY * scale)
//   canvasContext.lineTo(nextX * scale, nextY * scale)
//   canvasContext.lineWidth = lineWidth
//   canvasContext.strokeStyle = color
//   canvasContext.stroke()
// }

// export function drawSkeleton(
//   keypoints,
//   minConfidence,
//   color,
//   lineWidth,
//   canvasContext,
//   scale = 1
// ) {
//   const adjacentKeyPoints = posenet.getAdjacentKeyPoints(
//     keypoints,
//     minConfidence
//   )

//   adjacentKeyPoints.forEach(keypoints => {
//     drawSegment(
//       toTuple(keypoints[0].position),
//       toTuple(keypoints[1].position),
//       color,
//       lineWidth,
//       scale,
//       canvasContext
//     )
//   })
// }
