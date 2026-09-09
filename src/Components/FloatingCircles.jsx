const circles = [
  { size: '90px', top: '10%', left: '6%', delay: '0s', duration: '7s', color: 'circle-blue' },
  { size: '60px', top: '26%', left: '14%', delay: '1s', duration: '9s', color: 'circle-purple' },
  { size: '44px', top: '52%', left: '26%', delay: '0.5s', duration: '8s', color: 'circle-cyan' },
  { size: '78px', top: '78%', left: '5%', delay: '1.2s', duration: '10s', color: 'circle-indigo' },
  { size: '72px', top: '14%', left: '70%', delay: '0.8s', duration: '9s', color: 'circle-pink' },
  { size: '48px', top: '22%', left: '86%', delay: '1.6s', duration: '8s', color: 'circle-indigo' },
  { size: '52px', top: '50%', left: '42%', delay: '0.3s', duration: '7.5s', color: 'circle-pink' },
  { size: '84px', top: '82%', left: '68%', delay: '1.1s', duration: '11s', color: 'circle-purple' },
  { size: '58px', top: '68%', left: '90%', delay: '0.4s', duration: '8.5s', color: 'circle-blue' },
]

export default function FloatingCircles() {
  return (
    <div className="hero-floating-bg" aria-hidden="true">
      {circles.map((circle, index) => (
        <span
          key={index}
          className={`floating-circle ${circle.color}`}
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
            animationDelay: circle.delay,
            animationDuration: circle.duration,
          }}
        />
      ))}
    </div>
  )
}
