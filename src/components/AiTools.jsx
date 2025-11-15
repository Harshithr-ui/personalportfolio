import React from 'react'
import { motion } from 'framer-motion'

export default function AiTools() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/5 border border-white/10 rounded-xl p-6"
      >
        <h3 className="font-heading text-2xl text-white mb-2">AI Tools — Purpose-driven</h3>
        <p className="text-gray-300 leading-relaxed">
          I choose the best tool for the job — not the other way around. Below are the tools I use mapped to common AI tasks.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-xl p-5"
        >
          <h4 className="font-semibold text-lg text-white mb-2">Data & Experimentation</h4>
          <ul className="text-gray-300 list-disc ml-5 space-y-1">
            <li>Data wrangling: Python, pandas, SQL (Postgres) — choose SQL for relational joins, NoSQL for flexible schemas.</li>
            <li>Exploration & prototyping: Jupyter / VS Code notebooks.</li>
            <li>Experiment tracking: Weights & Biases or MLflow for reproducibility.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-xl p-5"
        >
          <h4 className="font-semibold text-lg text-white mb-2">Modeling & LLMs</h4>
          <ul className="text-gray-300 list-disc ml-5 space-y-1">
            <li>Classical ML: scikit-learn for quick baselines.</li>
            <li>Deep learning: PyTorch for flexibility; Hugging Face for transformers and model hubs.</li>
            <li>LLM usage: use instruction tuning, few-shot examples, and output validation to make models reliable.</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/5 border border-white/10 rounded-xl p-5"
      >
        <h4 className="font-semibold text-lg text-white mb-2">Production & Monitoring</h4>
        <ul className="text-gray-300 list-disc ml-5 space-y-1">
          <li>APIs & serving: FastAPI or Flask behind Docker.</li>
          <li>Containerization & orchestration: Docker, Kubernetes.</li>
          <li>Monitoring: Prometheus + Grafana, plus W&B for model metrics.</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/5 border border-white/10 rounded-xl p-5"
      >
        <h4 className="font-semibold text-lg text-white mb-2">Practical Principles</h4>
        <ul className="text-gray-300 list-disc ml-5 space-y-1">
          <li>Start small: validate with simple models before scaling.</li>
          <li>Measure what matters: pick clear metrics and constraints.</li>
          <li>Protect privacy: avoid sending PII to third-party APIs unless necessary.</li>
          <li>Optimize cost: run cheap proxies locally and use rate limits in production.</li>
        </ul>
      </motion.div>
    </div>
  )
}
