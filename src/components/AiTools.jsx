import React from 'react'
import { motion } from 'framer-motion'

export default function AiTools() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/5 border border-white/10 rounded-xl p-6"
      >
        <h3 className="font-heading text-2xl text-white mb-2">AI Tools & Workflows</h3>
        <p className="text-gray-300 leading-relaxed">
          Practical guidance for applying AI: model selection, data management, evaluation, deployment and safety.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-xl p-5"
        >
          <h4 className="font-semibold text-lg text-white mb-2">Recommended Tools</h4>
          <ul className="text-gray-300 list-disc ml-5 space-y-1">
            <li>Jupyter / VS Code for experimentation</li>
            <li>PyTorch / TensorFlow for model development</li>
            <li>scikit-learn for classical ML</li>
            <li>Hugging Face for transformers & model hub</li>
            <li>Weights & Biases or MLflow for experiment tracking</li>
            <li>Docker + Kubernetes for containerized deployment</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-xl p-5"
        >
          <h4 className="font-semibold text-lg text-white mb-2">Core Workflow</h4>
          <ol className="text-gray-300 list-decimal ml-5 space-y-1">
            <li>Define success criteria (metrics & constraints)</li>
            <li>Collect and version datasets (label clearly)</li>
            <li>Prototype models, instrument experiments</li>
            <li>Validate robustness & fairness, iterate</li>
            <li>Package, test, and deploy with CI/CD</li>
            <li>Monitor in production and retrain when needed</li>
          </ol>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/5 border border-white/10 rounded-xl p-5"
      >
        <h4 className="font-semibold text-lg text-white mb-2">Prompting & LLM tips</h4>
        <ul className="text-gray-300 list-disc ml-5 space-y-1">
          <li>Be explicit about desired output format and constraints.</li>
          <li>Use few-shot examples to reduce ambiguity for LLMs.</li>
          <li>Chain-of-thought prompts for reasoning-heavy tasks (when allowed).</li>
          <li>Sanitize inputs and validate outputs before acting on them.</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/5 border border-white/10 rounded-xl p-5"
      >
        <h4 className="font-semibold text-lg text-white mb-2">Safety, Privacy & Costs</h4>
        <p className="text-gray-300 leading-relaxed">
          Track data lineage, minimize PII exposure, and use quotas/limits to control API costs. Experiment with smaller models before scaling up.
        </p>
      </motion.div>
    </div>
  )
}
