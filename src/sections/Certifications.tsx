import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Eye, Download, X, Calendar, CheckCircle, ShieldCheck, ArrowUpDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { certifications } from '../data/portfolio';
import type { CertificationItem } from '../types';

export default function Certifications() {
  const { theme } = useTheme();
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'name'>('asc');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Filter
  const filteredCerts = certifications.filter((cert) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'featured') return cert.featured;
    return cert.category === activeCategory;
  });

  // Sort
  const sortedCerts = [...filteredCerts].sort((a, b) => {
    if (sortOrder === 'asc') {
      return new Date(a.issueDate).getTime() - new Date(b.issueDate).getTime();
    }
    if (sortOrder === 'desc') {
      return new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime();
    }
    return a.title.localeCompare(b.title);
  });

  return (
    <section
      id="certifications"
      className={`py-24 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-[#f4f6fb]'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              initial={{ rotate: -20, scale: 0.8 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <Award className="w-6 h-6 text-[#6366f1]" />
            </motion.div>
            <span className="text-[#6366f1] text-sm font-bold tracking-wider uppercase">
              Certifications & Credentials
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`text-4xl md:text-5xl font-extrabold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Professional Certifications
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`mt-4 text-base md:text-lg max-w-3xl ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Verified credentials across High-Performance AI, Cloud Architecture, Data Engineering, and Project Management. Click to inspect, verify, or download official certificates.
              </motion.p>
            </div>

            {/* Sort & Filter Controls */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex rounded-xl p-1 bg-gray-800 border border-gray-700 text-xs">
                <button
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white font-medium hover:bg-gray-700 transition-colors"
                  title="Toggle Chronological Order"
                >
                  <ArrowUpDown className="w-3.5 h-3.5 text-indigo-400" />
                  <span>
                    {sortOrder === 'asc' ? 'Date: Earliest First' : sortOrder === 'desc' ? 'Date: Latest First' : 'Alphabetical'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-2">
            {[
              { id: 'all', label: 'All Certificates' },
              { id: 'featured', label: '⭐ Featured (PMP Member)' },
              { id: 'ai', label: 'AI, LLMs & MCP' },
              { id: 'cloud', label: 'Cloud Architecture' },
              { id: 'data', label: 'Data Engineering' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                  activeCategory === cat.id
                    ? 'bg-[#6366f1] text-white border-[#6366f1] shadow-md shadow-indigo-500/20'
                    : theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 border-gray-700 hover:border-gray-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured PMP Dallas Chapter Member Banner (Highlight separately as requested) */}
        {certifications.filter(c => c.featured).map((featCert) => (
          <motion.div
            key={featCert.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div
              className={`relative rounded-2xl p-6 md:p-8 border-2 transition-all duration-300 overflow-hidden shadow-2xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-purple-950/60 via-indigo-950/50 to-gray-900 border-purple-500/50'
                  : 'bg-gradient-to-r from-purple-50 via-indigo-50 to-white border-purple-400'
              }`}
            >
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-amber-500 to-purple-600 text-white text-xs font-bold uppercase tracking-wider rounded-bl-xl shadow-md flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Featured Highlight: PMP Dallas Chapter Member
              </div>

              <div className="grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-3 flex justify-center">
                  <div className="w-32 h-32 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg border border-purple-200">
                    <img
                      src={featCert.logo}
                      alt={featCert.title}
                      className="max-h-24 max-w-full object-contain"
                    />
                  </div>
                </div>

                <div className="md:col-span-6 space-y-2 text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30">
                    Project Management Institute
                  </div>
                  <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {featCert.title}
                  </h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    Certified member of the Project Management Institute (PMI) Dallas Chapter, adhering to world-class standards in project, program, and portfolio governance and technical leadership.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>Issued: {featCert.completedDateDisplay}</span>
                  </div>
                </div>

                <div className="md:col-span-3 flex flex-col gap-2.5">
                  {featCert.pdfUrl && (
                    <button
                      onClick={() => setSelectedCert(featCert)}
                      className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center gap-2 shadow-md transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      View Certificate
                    </button>
                  )}
                  {featCert.pdfUrl && (
                    <a
                      href={featCert.pdfUrl}
                      download="PMI_Member_Certificate.pdf"
                      className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs border text-center flex items-center justify-center gap-2 transition-colors ${
                        theme === 'dark'
                          ? 'border-gray-700 text-gray-200 hover:bg-gray-800'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </a>
                  )}
                  {featCert.verifyUrl && (
                    <a
                      href={featCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-center text-purple-400 hover:underline flex items-center justify-center gap-1 mt-1"
                    >
                      <span>Verify on PMI.org</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCerts.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <div
                className={`relative rounded-2xl p-6 border transition-all duration-300 h-full flex flex-col justify-between ${
                  cert.featured
                    ? theme === 'dark'
                      ? 'bg-purple-950/20 border-purple-500/60 shadow-lg shadow-purple-900/20'
                      : 'bg-purple-50/50 border-purple-400 shadow-md'
                    : theme === 'dark'
                    ? 'bg-gray-800/90 border-gray-700/80 hover:border-[#6366f1]'
                    : 'bg-white border-gray-200 hover:border-[#6366f1] shadow-sm'
                }`}
              >
                {/* Header with Date Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium ${
                      theme === 'dark' ? 'bg-gray-700/80 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Calendar className="w-3 h-3 text-[#6366f1]" />
                    {cert.completedDateDisplay}
                  </span>
                </div>

                {/* Badge Logo */}
                <div className="mb-5 flex items-center justify-center h-28 bg-white/5 rounded-xl p-2">
                  <img
                    src={cert.logo}
                    alt={cert.title}
                    className="max-h-24 max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 mb-5">
                  <div className="text-xs font-semibold text-[#6366f1] uppercase tracking-wider mb-1">
                    {cert.organization}
                  </div>
                  <h3
                    className={`text-base font-bold leading-snug group-hover:text-[#6366f1] transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {cert.title}
                  </h3>
                  {cert.expirationDate && (
                    <p className="text-[11px] text-gray-400 mt-1">
                      Valid through: {cert.expirationDate}
                    </p>
                  )}
                </div>

                {/* Actions: View, Download & Verify */}
                <div className="pt-4 border-t border-gray-700/40 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    {cert.pdfUrl ? (
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="py-2 px-3 rounded-lg text-xs font-semibold bg-[#6366f1] hover:bg-[#4f46e5] text-white flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View</span>
                      </button>
                    ) : (
                      <div className="py-2 px-3 rounded-lg text-xs text-center text-gray-500 bg-gray-800/40 border border-gray-700/50">
                        Digital Badge
                      </div>
                    )}

                    {cert.pdfUrl ? (
                      <a
                        href={cert.pdfUrl}
                        download
                        className={`py-2 px-3 rounded-lg text-xs font-semibold border flex items-center justify-center gap-1.5 transition-colors ${
                          theme === 'dark'
                            ? 'border-gray-700 text-gray-300 hover:bg-gray-700'
                            : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>PDF</span>
                      </a>
                    ) : cert.verifyUrl ? (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 rounded-lg text-xs font-semibold bg-[#0d9488] hover:bg-[#0f766e] text-white flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Verify</span>
                      </a>
                    ) : null}
                  </div>

                  {cert.verifyUrl && cert.pdfUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center text-[11px] font-medium text-indigo-400 hover:text-indigo-300 flex items-center justify-center gap-1 pt-1"
                    >
                      <span>Verify Official Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl border ${
                theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'
              }`}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-700/60 bg-gray-950/60 text-white">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-600/30 text-indigo-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white line-clamp-1">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {selectedCert.organization} • Completed: {selectedCert.completedDateDisplay}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {selectedCert.pdfUrl && (
                    <a
                      href={selectedCert.pdfUrl}
                      download
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </a>
                  )}
                  {selectedCert.pdfUrl && (
                    <a
                      href={selectedCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-1.5 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open Tab</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body / PDF Viewer Frame */}
              <div className="flex-1 overflow-auto p-4 bg-gray-950/40 min-h-[480px] flex flex-col items-center justify-center">
                {selectedCert.pdfUrl ? (
                  <iframe
                    src={`${selectedCert.pdfUrl}#toolbar=1&view=FitH`}
                    title={selectedCert.title}
                    className="w-full h-[65vh] rounded-xl border border-gray-800 bg-white"
                  />
                ) : (
                  <div className="text-center p-8">
                    <img
                      src={selectedCert.logo}
                      alt={selectedCert.title}
                      className="w-36 h-36 mx-auto mb-4 object-contain"
                    />
                    <h4 className="text-lg font-bold text-white mb-2">{selectedCert.title}</h4>
                    <p className="text-sm text-gray-400 mb-4">{selectedCert.organization}</p>
                    {selectedCert.verifyUrl && (
                      <a
                        href={selectedCert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-xs font-semibold"
                      >
                        Verify Credential Online
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-3.5 border-t border-gray-700/60 bg-gray-950/40 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Authenticated Credential for Dr Hariharan Babu BE, MS, PhD</span>
                </div>
                {selectedCert.credentialId && (
                  <span className="font-mono text-gray-400">Credential ID: {selectedCert.credentialId}</span>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
