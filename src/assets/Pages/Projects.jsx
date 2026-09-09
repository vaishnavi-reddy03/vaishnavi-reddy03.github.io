import FloatingCircles from '../../Components/FloatingCircles'

const projects = [
  {
    id: 'sleep-apnea',
    period: '2024 – 2025',
    title: 'Sequential Sleep Apnea Detection using RLHF-Inspired PPO',
    desc: 'Developed a multimodal sleep apnea detection framework using thorax, abdomen, PFlow, and SpO2 signals. Built a full pipeline covering human-in-the-loop annotation, feature extraction using EMD and Hilbert-based statistics, reward-model training, and sequential PPO-based policy learning with a recurrent Quad-LSTM actor-critic architecture.',
    tools: 'Python, NumPy, Pandas, PyTorch, PPO, Reinforcement Learning, Signal Processing, EMD, Hilbert Transform',
    outcome: 'Built an RLHF-inspired sequential detection pipeline that achieved strong three-window training performance and robust full-night inference performance on unseen recordings, showing an effective balance of accuracy, precision, and recall in noisy biomedical data settings.',
  },
  {
    id: 'cstr-modeling',
    period: 'Apr 2024 – Aug 2024',
    title: 'Data-Driven Modeling and Uncertainty Quantification for CSTR',
    desc: 'Developed a data-driven model of a CSTR using artificial neural networks to capture nonlinear dynamics and quantile regression for uncertainty estimation.',
    tools: 'Python, TensorFlow, PyTorch, Adam Optimizer, MSE, Data Normalization',
    outcome: 'Achieved high prediction accuracy and robustness under noisy conditions.',
  },
  {
    id: 'mpc-terminal-set',
    period: 'Apr 2024 – Aug 2024',
    title: 'Terminal Set Analysis in MPC for a Spring-Mass-Damper System',
    desc: 'Modeled the system using linear state-space representation with Euler discretization and compared short prediction horizons of polytopic and ellipsoidal terminal sets.',
    tools: 'MATLAB, Control Systems, State-Space Modeling, MPC',
    outcome: 'Identified terminal sets that ensured recursive feasibility and system stability.',
  },
  {
    id: 'smart-trading-agent',
    period: 'Oct 2024 – Mar 2025',
    title: 'Smart Trading Agent for Local Energy Auctions',
    desc: 'Designed an end-to-end ML-driven decision system for a double-auction local energy market with price forecasting, trading logic, reward shaping, and no-loss operational safeguards.',
    tools: 'Python, Random Forest, Reinforcement Learning, PPO, Linear Regression',
    outcome: 'Completed 200 offers with 131 cleared over 6 days, achieved RMSE 0.00249 and R² 0.988 in the forecasting pipeline, and delivered positive trading profit under RL-based decision-making.',
  },
]

export default function Projects() {
  return (
    <section className="theme-page position-relative overflow-hidden">
      <FloatingCircles />

      <div className="container py-5 page-content-layer">
        <div className="page-head text-center mb-5">
          <p className="page-kicker">SELECTED WORK</p>
          <h1 className="theme-title">Projects</h1>
          <p className="theme-subtitle">
            Research, machine learning, reinforcement learning, control systems, and engineering work.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-12" key={index}>
              <div
                id={project.id}
                className={`theme-card project-card ${project.placeholder ? 'placeholder-card' : ''}`}
              >
                <p className="meta-range">{project.period}</p>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <p>
                  <strong>Tools:</strong> {project.tools}
                </p>
                <p>
                  <strong>Outcome:</strong> {project.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
