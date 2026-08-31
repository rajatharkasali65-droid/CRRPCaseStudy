import { useState } from 'react'

const TEAL = '#165EF0'
const NAVY = '#0d1a2e'
const NAVY_MID = '#1a3a6b'
const TEAL_BRIGHT = '#6b9fff'

function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #e2e5ea', boxShadow: '0 24px 64px rgba(13,33,55,0.14)', background: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', background: '#f1f3f5', borderBottom: '1px solid #e2e5ea' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
            <div key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{ flex: 1, margin: '0 12px' }}>
          <div style={{ background: '#fff', borderRadius: 6, fontSize: 11, color: '#888', padding: '3px 10px', fontFamily: 'monospace' }}>{url}</div>
        </div>
      </div>
      {children}
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const configs: Record<string, { bg: string; color: string; border: string }> = {
    VERIFIED: { bg: '#f0fdf4', color: '#15803d', border: '#bbf7d0' },
    PENDING: { bg: '#fffbeb', color: '#b45309', border: '#fde68a' },
    ACTION: { bg: '#fff1f2', color: '#be123c', border: '#fecdd3' },
    SUBMITTED: { bg: '#eff6ff', color: '#1d4ed8', border: '#bfdbfe' },
    READY: { bg: '#f0fdfa', color: '#0f766e', border: '#99f6e4' },
    ACTIVE: { bg: '#f0fdf4', color: '#15803d', border: '#bbf7d0' },
    'IN PROGRESS': { bg: '#eff6ff', color: '#1d4ed8', border: '#bfdbfe' },
    'NOT STARTED': { bg: '#f9fafb', color: '#6b7280', border: '#e5e7eb' },
  }
  const cfg = configs[status] || { bg: '#f9fafb', color: '#6b7280', border: '#e5e7eb' }
  return (
    <span style={{
      fontSize: 10, fontWeight: 700, fontFamily: 'monospace', letterSpacing: '0.06em',
      textTransform: 'uppercase', padding: '2px 8px', borderRadius: 4,
      background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.border}`,
      whiteSpace: 'nowrap',
    }}>
      {status}
    </span>
  )
}

function DashboardMockup() {
  return (
    <BrowserFrame url="crrp.karnataka.gov.in/dashboard">
      <div style={{ display: 'flex', height: 380, fontFamily: 'Inter, sans-serif', fontSize: 12 }}>
        <div style={{ width: 152, background: NAVY_MID, color: '#fff', padding: '16px 0', flexShrink: 0 }}>
          <div style={{ padding: '0 16px 14px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: 3, color: TEAL_BRIGHT, fontFamily: 'Satoshi, sans-serif' }}>CRRP</span>
          </div>
          {['Dashboard', 'My Applications', 'Documents', 'Payments', 'Appointments', 'Digital License', 'Help'].map((item, i) => (
            <div key={item} style={{
              padding: '8px 16px', cursor: 'pointer',
              background: i === 0 ? 'rgba(255,255,255,0.1)' : 'transparent',
              color: i === 0 ? '#fff' : 'rgba(255,255,255,0.58)',
              fontWeight: i === 0 ? 600 : 400,
              borderLeft: i === 0 ? `2px solid ${TEAL_BRIGHT}` : '2px solid transparent',
              fontSize: 12,
            }}>
              {item}
            </div>
          ))}
        </div>
        <div style={{ flex: 1, padding: 20, background: '#f8fafc', overflowY: 'auto' }}>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#323232', fontFamily: 'Satoshi, sans-serif' }}>Welcome back, ABC Constructions Pvt. Ltd.</div>
            <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>Class 1 — Civil Contractor · Bengaluru Zone</div>
          </div>
          <div style={{ background: NAVY_MID, borderRadius: 10, padding: 16, color: '#fff', marginBottom: 14 }}>
            <div style={{ fontSize: 9, letterSpacing: '0.09em', opacity: 0.65, marginBottom: 6, fontFamily: 'monospace', textTransform: 'uppercase' }}>Application #KACRP 10234</div>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 14 }}>Your application is under departmental review</div>
            <div style={{ background: 'rgba(255,255,255,0.18)', borderRadius: 4, height: 5, marginBottom: 5 }}>
              <div style={{ width: '70%', height: '100%', background: TEAL_BRIGHT, borderRadius: 4 }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, opacity: 0.7 }}>
              <span>70% complete</span>
              <span>Action required: Upload Work Done Certificate</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8, marginBottom: 14 }}>
            {['My Applications', 'Documents', 'Payments', 'Appointments', 'Digital License'].map(t => (
              <div key={t} style={{ background: '#fff', border: '1px solid #e2e5ea', borderRadius: 8, padding: '10px 8px', textAlign: 'center', fontSize: 10, color: '#475569', cursor: 'pointer' }}>
                {t}
              </div>
            ))}
          </div>
          <div style={{ background: '#fff', border: '1px solid #e2e5ea', borderRadius: 8, overflow: 'hidden' }}>
            {[
              { doc: 'Work Done Certificate', sub: 'REQUIRED · SUBMIT BY 18 AUG', status: 'ACTION' },
              { doc: 'Solvency Certificate', sub: 'SUBMITTED · UNDER CHECK', status: 'PENDING' },
              { doc: 'PAN / GST / Aadhaar', sub: 'LINKED & VERIFIED', status: 'VERIFIED' },
            ].map(({ doc, sub, status }) => (
              <div key={doc} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 14px', borderBottom: '1px solid #f1f5f9' }}>
                <div>
                  <div style={{ fontWeight: 600, color: '#323232', marginBottom: 2 }}>{doc}</div>
                  <div style={{ fontSize: 10, color: '#94a3b8', fontFamily: 'monospace' }}>{sub}</div>
                </div>
                <StatusBadge status={status} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

function RegistrationMockup() {
  const steps = ['Business', 'Applicant', 'Technical person', 'Work experience', 'Financial', 'Documents', 'Review']
  return (
    <BrowserFrame url="crrp.karnataka.gov.in/apply/technical-person">
      <div style={{ padding: '24px 28px', fontFamily: 'Inter, sans-serif', fontSize: 12 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 28, gap: 0, overflowX: 'auto' }}>
          {steps.map((step, i) => (
            <div key={step} style={{ display: 'flex', alignItems: 'flex-start', flexShrink: 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: i < 2 ? TEAL : i === 2 ? NAVY_MID : '#e2e5ea',
                  color: i < 3 ? '#fff' : '#94a3b8', fontWeight: 700, fontSize: 11,
                }}>
                  {i + 1}
                </div>
                <span style={{ fontSize: 9, color: i === 2 ? NAVY : '#94a3b8', textAlign: 'center', maxWidth: 60, lineHeight: 1.3 }}>{step}</span>
              </div>
              {i < steps.length - 1 && (
                <div style={{ width: 30, height: 2, background: i < 2 ? TEAL : '#e2e5ea', flexShrink: 0, marginTop: 13 }} />
              )}
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ fontSize: 11, color: '#64748b', marginBottom: 4, display: 'block' }}>Technical person name</label>
            <div style={{ border: `1.5px solid ${TEAL}`, borderRadius: 6, padding: '8px 12px', color: '#323232' }}>Ramesh K. Gowda</div>
          </div>
          <div>
            <label style={{ fontSize: 11, color: '#64748b', marginBottom: 4, display: 'block' }}>Qualification</label>
            <div style={{ border: '1px solid #e2e5ea', borderRadius: 6, padding: '8px 12px', color: '#323232' }}>Diploma in Civil Engineering</div>
          </div>
          <div>
            <label style={{ fontSize: 11, color: '#64748b', marginBottom: 4, display: 'block' }}>Experience (years)</label>
            <div style={{ border: '1px solid #e2e5ea', borderRadius: 6, padding: '8px 12px', color: '#323232' }}>9</div>
          </div>
          <div style={{ gridColumn: '1 / -1', background: '#eff8ff', border: '1px solid #bae6fd', borderRadius: 8, padding: 12 }}>
            <p style={{ fontSize: 11, color: '#0369a1', margin: 0, lineHeight: 1.6 }}>
              A named technical person is required for Class 1–2 contractor categories. This links responsibility for site work to a verifiable individual, and speeds up department review.
            </p>
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <div style={{ fontSize: 9, letterSpacing: '0.1em', color: '#94a3b8', fontFamily: 'monospace', marginBottom: 10, textTransform: 'uppercase' }}>— Document Management</div>
          <div style={{ border: '1px solid #e2e5ea', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 110px', background: '#f8fafc', padding: '7px 14px', fontSize: 9, color: '#94a3b8', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'monospace' }}>
              <span>Document</span><span>Why it&apos;s needed</span><span>Status</span>
            </div>
            {[
              { doc: 'PAN', why: 'Business identity verification', status: 'VERIFIED' },
              { doc: 'GST', why: 'Tax registration check', status: 'VERIFIED' },
              { doc: 'Aadhaar', why: 'Applicant identity link', status: 'VERIFIED' },
              { doc: 'Solvency Certificate', why: 'Financial standing for class', status: 'ACTION' },
              { doc: 'Work Done Certificate', why: 'Prior project evidence', status: 'ACTION' },
              { doc: 'Technical Person Document', why: 'Qualification proof', status: 'SUBMITTED' },
            ].map(({ doc, why, status }) => (
              <div key={doc} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 110px', padding: '9px 14px', borderTop: '1px solid #f1f5f9', alignItems: 'center' }}>
                <span style={{ color: '#323232', fontWeight: 500 }}>{doc}</span>
                <span style={{ color: '#64748b' }}>{why}</span>
                <StatusBadge status={status} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

function TrackingMockup() {
  return (
    <BrowserFrame url="crrp.karnataka.gov.in/applications/KACRP-10234">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, fontFamily: 'Inter, sans-serif', fontSize: 12 }}>
        <div style={{ padding: 22, borderRight: '1px solid #f1f5f9' }}>
          <div style={{ fontSize: 9, letterSpacing: '0.09em', color: '#94a3b8', fontFamily: 'monospace', textTransform: 'uppercase', marginBottom: 14 }}>Application #KACRP-10234</div>
          {[
            { label: 'Application submitted', date: '01 AUG 2026', status: 'done' },
            { label: 'Documents verified', date: '03 AUG 2026', status: 'done' },
            { label: 'Payment confirmed', date: '05 AUG 2026', status: 'done' },
            { label: 'Department review', date: 'IN PROGRESS', status: 'active' },
            { label: 'Final approval', date: 'NOT STARTED', status: 'pending' },
            { label: 'License issued', date: 'NOT STARTED', status: 'pending' },
          ].map(({ label, date, status }, i, arr) => (
            <div key={label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: 12, height: 12, borderRadius: '50%', flexShrink: 0, marginTop: 2,
                  background: status === 'done' ? '#16a34a' : status === 'active' ? TEAL : '#d1d5db',
                  boxShadow: status === 'active' ? `0 0 0 3px ${TEAL}22` : 'none',
                }} />
                {i < arr.length - 1 && <div style={{ width: 2, height: 22, background: '#e2e5ea' }} />}
              </div>
              <div style={{ paddingBottom: 16 }}>
                <div style={{ fontWeight: status === 'active' ? 700 : 500, color: status === 'pending' ? '#94a3b8' : '#323232', fontSize: 12 }}>{label}</div>
                <div style={{ fontSize: 9, color: '#94a3b8', fontFamily: 'monospace', marginTop: 2 }}>{date}</div>
              </div>
            </div>
          ))}
          <div style={{ background: '#f8fafc', border: '1px solid #e2e5ea', borderRadius: 8, padding: 12, marginTop: 4 }}>
            <p style={{ margin: 0, fontSize: 11, color: '#64748b', lineHeight: 1.6 }}>Current action: none required. Your application is being reviewed by the registering authority.</p>
          </div>
        </div>
        <div style={{ padding: 22 }}>
          <div style={{ fontSize: 9, letterSpacing: '0.09em', color: '#94a3b8', fontFamily: 'monospace', textTransform: 'uppercase', marginBottom: 14 }}>Book Verification Appointment</div>
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 11, color: '#64748b', display: 'block', marginBottom: 5 }}>Verification office</label>
            <div style={{ border: '1px solid #e2e5ea', borderRadius: 6, padding: '8px 12px', color: '#323232' }}>KPWD — Bengaluru</div>
          </div>
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 11, color: '#64748b', display: 'block', marginBottom: 7 }}>Select a date</label>
            <div style={{ display: 'flex', gap: 6 }}>
              {['MON', 'TUE', 'WED', 'THU', 'FRI'].map((d, i) => (
                <div key={d} style={{
                  padding: '6px 10px', borderRadius: 6, border: '1px solid',
                  borderColor: i === 1 ? TEAL : '#e2e5ea',
                  background: i === 1 ? '#e8f4f8' : '#fff',
                  color: i === 1 ? TEAL : '#64748b', fontSize: 10, fontWeight: 600, cursor: 'pointer',
                }}>{d}</div>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 11, color: '#64748b', display: 'block', marginBottom: 7 }}>Select a time</label>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {['10:00 AM', '11:30 AM', '2:00 PM', '3:30 PM'].map((t, i) => (
                <div key={t} style={{
                  padding: '6px 12px', borderRadius: 6, border: '1px solid',
                  borderColor: i === 1 ? NAVY_MID : '#e2e5ea',
                  background: i === 1 ? NAVY_MID : '#fff',
                  color: i === 1 ? '#fff' : '#64748b', fontSize: 11, cursor: 'pointer',
                }}>{t}</div>
              ))}
            </div>
          </div>
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: 12 }}>
            <p style={{ margin: 0, fontSize: 11, color: '#15803d', lineHeight: 1.6 }}>Appointment booked successfully. Bring the original documents listed in your application.</p>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

function LicenseMockup() {
  return (
    <BrowserFrame url="crrp.karnataka.gov.in/license/KACRP-123456">
      <div style={{ padding: 28, fontFamily: 'Inter, sans-serif', fontSize: 12 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: '0.1em', color: '#94a3b8', fontFamily: 'monospace', marginBottom: 14, textTransform: 'uppercase' }}>Digital License</div>
            <div style={{
              background: `linear-gradient(135deg, ${NAVY_MID} 0%, #0f3050 100%)`,
              color: '#fff', borderRadius: 14, padding: 22,
              display: 'flex', flexDirection: 'column', gap: 14,
              boxShadow: '0 8px 32px rgba(13,33,55,0.25)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -24, right: -24, width: 120, height: 120, borderRadius: '50%', background: 'rgba(126,203,216,0.07)' }} />
              <div>
                <div style={{ fontSize: 8, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace', textTransform: 'uppercase' }}>Karnataka Public Works Department · Contractor License</div>
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, fontFamily: 'Satoshi, sans-serif', marginBottom: 3 }}>ABC Constructions Pvt. Ltd.</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)' }}>Class 1 — Civil Contractor</div>
              </div>
              <div>
                <div style={{ fontSize: 12, fontFamily: 'monospace', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.04em' }}>Reg. No. KACRP-123456</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <StatusBadge status="ACTIVE" />
                  <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', marginTop: 6, fontFamily: 'monospace' }}>VALID UNTIL 31/03/2027</div>
                </div>
                <div style={{ width: 46, height: 46, background: 'rgba(255,255,255,0.12)', borderRadius: 6, display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 1.5, padding: 4 }}>
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} style={{ background: [0,1,2,6,8,12,14,16,17,18,19,20,24,26,30,33,35].includes(i) ? 'rgba(255,255,255,0.85)' : 'transparent', borderRadius: 1 }} />
                  ))}
                </div>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#323232', marginBottom: 12 }}>ID simplification</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11 }}>
                <code style={{ fontSize: 9, color: '#94a3b8', background: '#f8fafc', padding: '4px 8px', borderRadius: 4, border: '1px solid #e2e5ea' }}>CBS/C1/CIVIL/1234/2015</code>
                <span style={{ color: '#94a3b8' }}>→</span>
                <code style={{ fontSize: 11, color: NAVY, fontWeight: 700, background: '#e8f4f8', padding: '4px 10px', borderRadius: 4, border: `1px solid ${TEAL}44` }}>KACRP-123456</code>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.1em', color: '#94a3b8', fontFamily: 'monospace', marginBottom: 12, textTransform: 'uppercase' }}>License Verification Result</div>
              <div style={{ border: '1px solid #e2e5ea', borderRadius: 10, padding: 16, background: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <span style={{ fontWeight: 700, fontSize: 14, fontFamily: 'Satoshi, sans-serif', color: '#323232' }}>ABC Constructions Pvt. Ltd.</span>
                  <StatusBadge status="ACTIVE" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5, fontSize: 12, color: '#64748b' }}>
                  <span>Registration: KACRP-123456</span>
                  <span>Class: 1 — Civil Contractor</span>
                  <span>Valid until: 31/03/2027</span>
                </div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#323232', marginBottom: 12 }}>Secure by design — MFA login</div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0 }}>
                {['Email / mobile', 'Password', 'OTP verification', 'Dashboard'].map((step, i) => (
                  <div key={step} style={{ display: 'flex', alignItems: 'flex-start', flexShrink: 0 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                      <div style={{ width: 22, height: 22, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: TEAL, color: '#fff', fontWeight: 700, fontSize: 10 }}>{i + 1}</div>
                      <span style={{ fontSize: 9, color: '#64748b', whiteSpace: 'nowrap', textAlign: 'center', maxWidth: 52, lineHeight: 1.3 }}>{step}</span>
                    </div>
                    {i < 3 && <div style={{ width: 18, height: 2, background: '#e2e5ea', flexShrink: 0, marginTop: 10 }} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

function DeptMockup() {
  return (
    <BrowserFrame url="crrp.karnataka.gov.in/admin/queue">
      <div style={{ display: 'flex', height: 380, fontFamily: 'Inter, sans-serif', fontSize: 12 }}>
        <div style={{ width: 152, background: NAVY, color: '#fff', padding: '16px 0', flexShrink: 0 }}>
          <div style={{ padding: '0 16px 14px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: 6 }}>
            <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 3, color: TEAL_BRIGHT, fontFamily: 'Satoshi, sans-serif', textTransform: 'uppercase' }}>CRRP Admin</span>
          </div>
          {['Applications', 'Tasks', 'Contractors', 'Documents', 'Workflow', 'Users & Licenses', 'Reports'].map((item, i) => (
            <div key={item} style={{
              padding: '8px 16px',
              background: i === 0 ? 'rgba(255,255,255,0.08)' : 'transparent',
              color: i === 0 ? '#fff' : 'rgba(255,255,255,0.55)',
              fontWeight: i === 0 ? 600 : 400,
              borderLeft: i === 0 ? `2px solid ${TEAL_BRIGHT}` : '2px solid transparent',
              cursor: 'pointer', fontSize: 12,
            }}>
              {item}
            </div>
          ))}
        </div>
        <div style={{ flex: 1, padding: 20, background: '#f8fafc', overflowY: 'auto' }}>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 16, fontWeight: 800, fontFamily: 'Satoshi, sans-serif', color: '#323232' }}>Application Queue</div>
            <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>Bengaluru Zone · Civil Contractors</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8, marginBottom: 16 }}>
            {[
              { label: 'New applications', value: '24' },
              { label: 'Pending review', value: '18' },
              { label: 'Awaiting documents', value: '07' },
              { label: 'Ready for approval', value: '11' },
              { label: 'Licenses expiring', value: '32' },
            ].map(({ label, value }) => (
              <div key={label} style={{ background: '#fff', border: '1px solid #e2e5ea', borderRadius: 10, padding: '12px 14px' }}>
                <div style={{ fontSize: 24, fontWeight: 900, color: '#323232', fontFamily: 'Satoshi, sans-serif', lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 4, lineHeight: 1.3 }}>{label}</div>
              </div>
            ))}
          </div>
          <div style={{ background: '#fff', border: '1px solid #e2e5ea', borderRadius: 10, overflow: 'hidden' }}>
            {[
              { id: 'KACRP-1024', name: 'ABC Constructions', type: 'REVIEW', status: 'PENDING' },
              { id: 'KACRP-1025', name: 'Nandi Infra Pvt. Ltd.', type: 'DOCUMENTS', status: 'ACTION' },
              { id: 'KACRP-1026', name: 'Vasavi Builders', type: 'APPROVAL', status: 'READY' },
            ].map(({ id, name, type, status }, i) => (
              <div key={id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 16px', borderBottom: i < 2 ? '1px solid #f1f5f9' : undefined, cursor: 'pointer' }}>
                <div>
                  <div style={{ fontWeight: 600, color: '#323232' }}>{id} — {name}</div>
                  <div style={{ fontSize: 9, color: '#94a3b8', fontFamily: 'monospace', letterSpacing: '0.07em', marginTop: 2, textTransform: 'uppercase' }}>{type}</div>
                </div>
                <StatusBadge status={status} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

const screens = [
  { id: 'dashboard', label: 'Contractor Dashboard', component: DashboardMockup },
  { id: 'registration', label: 'Guided Registration', component: RegistrationMockup },
  { id: 'tracking', label: 'Application Tracking', component: TrackingMockup },
  { id: 'license', label: 'Digital License', component: LicenseMockup },
  { id: 'dept', label: 'Dept. Workspace', component: DeptMockup },
]

const screenDetails: Record<string, { heading: string; body: string; rationale: string }> = {
  dashboard: {
    heading: 'One Question, Answered First',
    body: 'The dashboard is built around a single question a contractor actually has: "what do I need to do next?" Instead of a menu of modules, the first thing they see is their live application status, the one action required of them, and a clear path to everything else.',
    rationale: 'Status, not navigation, leads. The hero card always states where the application stands and what the contractor must personally do  never a generic “in progress.” Quick-access tiles keep the rest of the portal one tap away without competing with the primary task, so the dashboard scales from a first-time registration to years of renewals.',
  },
  registration: {
    heading: 'Making Complex Forms Easier',
    body: 'Government registration asks for a large amount of information at once. Rather than one long form, it\'s broken into focused sections — Business Details → Applicant Details → Technical Person → Work Experience → Financial Information → Documents → Review & Submit — each explaining what\'s needed, why, and what happens next.',
    rationale: 'Every document tells the contractor what it is, why it\'s required, and what happens next — replacing an undifferentiated upload list with a real checklist. A contextual callout explains why the technical person step matters for their contractor class, reducing support queries.',
  },
  tracking: {
    heading: 'Application Tracking',
    body: 'Contractors previously had no way to see where their application stood. The tracker gives every application a visible timeline and a single, current-action line — so "no news" never means "no idea."',
    rationale: 'Original document verification remains part of the process, so the digital experience makes the physical step predictable too — a confirmed office, date, and time, with a clear reminder of what to bring. The appointment flow is integrated directly into the tracking view.',
  },
  license: {
    heading: 'From Smart Card to QR License',
    body: 'The proposal replaces the physical MIFARE smart-card approach with a QR-based license — simpler to issue, simpler to verify, and impossible to leave at home.',
    rationale: 'Scanning the license opens a read-only, tamper-proof confirmation — giving tendering authorities and the public a faster way to trust contractor credentials without relying on a physical card. Multi-factor authentication adds a layer of protection to every portal login, without adding unnecessary friction.',
  },
  dept: {
    heading: 'Designing for the Department',
    body: 'The contractor experience is only one side of the product. For departmental users, the interface shifts from forms-first to work-first — an operational queue built around what needs attention today.',
    rationale: 'A case worker\'s day starts with "what\'s in my queue," not "search for a contractor." Status pills reuse the same visual language as the contractor portal — VERIFIED, PENDING, ACTION — so state means the same thing on both sides of the service.',
  },
}

export default function App() {
  const [activeScreen, setActiveScreen] = useState('dashboard')
  const ActiveMockup = screens.find(s => s.id === activeScreen)?.component || DashboardMockup
  const detail = screenDetails[activeScreen]
  const screenIndex = screens.findIndex(s => s.id === activeScreen)

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#fff', color: '#323232' }}>

      {/* ─── HERO ─── */}
      <section style={{ background: NAVY, color: '#fff', padding: 'clamp(56px, 8vw, 96px) clamp(24px, 6vw, 80px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(ellipse at 75% 30%, rgba(30,107,138,0.28) 0%, transparent 65%), radial-gradient(ellipse at 20% 80%, rgba(126,203,216,0.08) 0%, transparent 50%)`, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 56 }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.38)', fontFamily: 'monospace', marginBottom: 4 }}>CASE FILE NO. KACRP-2025-001</div>
              <div style={{ fontSize: 10, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.38)', fontFamily: 'monospace' }}>Design Portfolio Document</div>
            </div>
            <div style={{
              width: 88, height: 88, borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.18)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              background: 'rgba(255,255,255,0.04)',
            }}>
              <div style={{ fontSize: 15, fontWeight: 900, color: '#ffffff', letterSpacing: 3, fontFamily: 'Satoshi, sans-serif' }}>CRRP</div>
              <div style={{ fontSize: 7, color: '#ffffff', textAlign: 'center', lineHeight: '10px', letterSpacing: 0, fontFamily: 'monospace', marginTop: 4 }}>GOVT · PROPOSAL. 2025</div>
            </div>
          </div>

          <div style={{ marginBottom: 56 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.16em', color: TEAL_BRIGHT, fontFamily: 'monospace', textTransform: 'uppercase', marginBottom: 20 }}>Contractor Registration &amp; Renewal Portal UI/UX Design Case Study.</div>
            <h1 style={{
              fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 900, fontFamily: 'Satoshi, sans-serif',
              lineHeight: 1.08, margin: '0 0 28px', color: '#fff', letterSpacing: '-0.02em',
            }}>
              Modernizing Contractor<br />Registration &amp; Renewal
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 540, lineHeight: 1.75, margin: 0 }}>
              Designing a unified, secure and mobile-responsive digital experience that turns a paper-dependent government workflow into one connected service for civil contractors across Karnataka.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: 'rgba(255,255,255,0.06)', borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
            {[
              { label: 'ROLE', value: 'UI / UX Designer' },
              { label: 'PLATFORM', value: 'Responsive Web App' },
              { label: 'DOMAIN', value: 'GovTech · Public Services' },
              { label: 'CLIENT', value: 'Karnataka PWD' },
            ].map(({ label, value }, i) => (
              <div key={label} style={{ padding: '22px 26px', borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <div style={{ fontSize: 9, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace', textTransform: 'uppercase', marginBottom: 10 }}>{label}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 01: CHALLENGE ─── */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) clamp(24px, 6vw, 80px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 56 }}>
            <div style={{ paddingTop: 4 }}>
              <div style={{ fontSize: 80, fontWeight: 900, color: '#f1f5f9', fontFamily: 'Satoshi, sans-serif', lineHeight: 1, letterSpacing: '-0.04em' }}>01</div>
              <div style={{ fontSize: 9, letterSpacing: '0.12em', color: '#94a3b8', fontFamily: 'monospace', textTransform: 'uppercase', marginTop: 10, lineHeight: 1.8 }}>
                CASE STUDY<br />SECTION ONE
              </div>
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.1em', color: '#94a3b8', fontFamily: 'monospace', marginBottom: 36, display: 'flex', gap: 12 }}>
                <span style={{ color: TEAL, fontWeight: 700 }}>CHALLENGE</span>
                <span>·</span><span>PROBLEM</span>
                <span>·</span><span>GOAL</span>
              </div>

              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, fontFamily: 'Satoshi, sans-serif', color: '#323232', marginBottom: 20, marginTop: 0, letterSpacing: '-0.02em' }}>The Challenge</h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: '#475569', marginBottom: 14, marginTop: 0 }}>
                <strong style={{ color: '#323232' }}>A digital portal built around a paper-based process.</strong> The existing Civil Contractor Registration &amp; Renewal Portal was developed in 2014–15. Contractors could technically apply online, but the workflow still leaned on printed applications, physical files, bank correspondence and manual verification at every stage.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: '#475569', marginBottom: 28, marginTop: 0 }}>
                Separate portals existed for different zones and contractor classes&nbsp;&nbsp;so the "digital" system still behaved like a fragmented, office-by-office process. The opportunity was clear:
              </p>
              <div style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: 22, marginBottom: 64, background: '#f8fcff', padding: '14px 22px', borderRadius: '0 8px 8px 0' }}>
                <p style={{ fontSize: 14, color: '#1e6b8a', fontStyle: 'italic', margin: 0, lineHeight: 1.7 }}>
                  Transform a fragmented, paper-dependent registration process into one connected digital experience.
                </p>
              </div>

              <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 800, fontFamily: 'Satoshi, sans-serif', color: '#323232', marginBottom: 24, marginTop: 0, letterSpacing: '-0.02em' }}>The Problem</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 64 }}>
                {[
                  {
                    title: 'For contractors',
                    items: ['Multiple portals to keep track of', 'Complicated registration & renewal steps', 'Registration numbers that are hard to recall', 'Manual processes for certain contractor classes', 'Little to no visibility into application status', 'Physical documentation still required'],
                  },
                  {
                    title: 'For department teams',
                    items: ['Paper files running alongside online applications', 'Difficult, scattered document management', 'Inconsistent workflows across offices', 'Manual task assignment', 'Limited user & access management', 'Challenging license-status handling'],
                  }
                ].map(({ title, items }) => (
                  <div key={title}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#323232', marginBottom: 16, fontFamily: 'Satoshi, sans-serif' }}>{title}</div>
                    {items.map(item => (
                      <div key={item} style={{ display: 'flex', gap: 10, marginBottom: 9, alignItems: 'flex-start' }}>
                        <span style={{ color: '#cbd5e1', marginTop: 3, flexShrink: 0, fontSize: 13 }}>—</span>
                        <span style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 800, fontFamily: 'Satoshi, sans-serif', color: '#323232', marginBottom: 24, marginTop: 0, letterSpacing: '-0.02em' }}>The Goal</h2>
              <div>
                {[
                  { n: '01', bold: 'One place', rest: '— bring registration, renewal and upgrades together.' },
                  { n: '02', bold: 'One identity', rest: '— give every contractor a single account across their lifecycle.' },
                  { n: '03', bold: 'Guided completion', rest: '— break complex forms into understandable steps.' },
                  { n: '04', bold: 'Transparent progress', rest: '— make application status and next actions visible.' },
                  { n: '05', bold: 'Digital by default', rest: '— reduce unnecessary paper, manual checks and physical credentials.' },
                ].map(({ n, bold, rest }) => (
                  <div key={n} style={{ display: 'flex', gap: 24, padding: '16px 0', borderBottom: '1px solid #f1f5f9', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: TEAL, fontFamily: 'monospace', flexShrink: 0, marginTop: 2 }}>{n}</span>
                    <span style={{ fontSize: 15, color: '#323232', lineHeight: 1.65 }}>
                      <strong style={{ color: '#323232' }}>{bold}</strong> {rest}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 02: ECOSYSTEM ─── */}
      <section style={{ background: '#f8fafc', padding: 'clamp(64px, 8vw, 96px) clamp(24px, 6vw, 80px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 56 }}>
            <div style={{ paddingTop: 4 }}>
              <div style={{ fontSize: 80, fontWeight: 900, color: '#e2e8f0', fontFamily: 'Satoshi, sans-serif', lineHeight: 1, letterSpacing: '-0.04em' }}>02</div>
              <div style={{ fontSize: 9, letterSpacing: '0.12em', color: '#94a3b8', fontFamily: 'monospace', textTransform: 'uppercase', marginTop: 10, lineHeight: 1.8 }}>
                CASE STUDY<br />SECTION TWO
              </div>
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.1em', color: '#94a3b8', fontFamily: 'monospace', marginBottom: 36, display: 'flex', gap: 12 }}>
                <span style={{ color: TEAL, fontWeight: 700 }}>ECOSYSTEM</span>
                <span>·</span><span>ARCHITECTURE</span>
                <span>·</span><span>JOURNEY</span>
              </div>

              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, fontFamily: 'Satoshi, sans-serif', color: '#323232', marginBottom: 16, marginTop: 0, letterSpacing: '-0.02em' }}>Understanding the Ecosystem</h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: '#475569', marginBottom: 40, marginTop: 0 }}>
                CRRP isn't just a contractor-facing portal&nbsp;&nbsp;it connects everyone involved in registration and verification. Designing the interface meant designing the system around it first.
              </p>

              {/* System map */}
              <div style={{ background: '#fff', border: '1px solid #e2e5ea', borderRadius: 16, padding: '28px 32px', marginBottom: 40 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, width: '100%' }}>
                    {['Contractors', 'Case Workers', 'Approving Officers', 'Administrators'].map((r, i) => (
                      <div key={r} style={{
                        border: `1.5px solid ${i === 0 ? TEAL : '#e2e5ea'}`,
                        borderRadius: 8, padding: '8px 12px', textAlign: 'center', fontSize: 12,
                        color: i === 0 ? TEAL : '#64748b', fontWeight: i === 0 ? 600 : 400,
                        background: i === 0 ? '#edf7fc' : '#fff',
                      }}>{r}</div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                    <div style={{ width: 2, height: 20, background: '#e2e5ea' }} />
                    <div style={{ background: NAVY_MID, color: '#fff', borderRadius: 10, padding: '10px 40px', fontSize: 14, fontWeight: 800, letterSpacing: 4, fontFamily: 'Satoshi, sans-serif' }}>CRRP</div>
                    <div style={{ width: 2, height: 20, background: '#e2e5ea' }} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, width: '100%' }}>
                    {['Banks', 'Work / Tendering Auth.', 'Public', 'Aadhaar · Khajane · Sakala'].map(r => (
                      <div key={r} style={{ border: '1px solid #e2e5ea', borderRadius: 8, padding: '8px 12px', textAlign: 'center', fontSize: 11, color: '#94a3b8' }}>{r}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* IA */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 48 }}>
                {[
                  { title: 'Information Architecture — Contractor Portal', items: ['Dashboard', 'My Applications', 'New Registration', 'Renewal / Upgrade License', 'Documents', 'Payments', 'Appointments', 'Digital License', 'Notifications · Help'] },
                  { title: 'Information Architecture — Department Portal', items: ['Dashboard', 'Applications', 'Tasks', 'Contractors', 'Documents', 'Workflow', 'Users & License Mgmt.', 'Reports', 'Settings'] },
                ].map(({ title, items }) => (
                  <div key={title}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#323232', marginBottom: 14, fontFamily: 'Satoshi, sans-serif' }}>{title}</div>
                    {items.map((item, i) => (
                      <div key={item} style={{ fontSize: 13, color: '#64748b', padding: '6px 0', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontSize: 9, color: '#cbd5e1', fontFamily: 'monospace' }}>{String(i + 1).padStart(2, '0')}</span>
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Journey */}
              <h3 style={{ fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 700, fontFamily: 'Satoshi, sans-serif', color: '#323232', marginBottom: 12, marginTop: 0 }}>The Registration Journey</h3>
              <p style={{ fontSize: 14, color: '#64748b', marginBottom: 24, marginTop: 0, lineHeight: 1.7 }}>Ten stages, simplified into one guided path&nbsp;&nbsp;from account creation to an approved, verifiable license.</p>
              <div style={{ display: 'flex', alignItems: 'flex-start', overflowX: 'auto', paddingBottom: 8, gap: 0 }}>
                {[
                  { n: 1, label: 'Create account' },
                  { n: 2, label: 'Verify identity' },
                  { n: 3, label: 'Select service' },
                  { n: 4, label: 'Business info' },
                  { n: 5, label: 'Technical person' },
                  { n: 6, label: 'Documents' },
                  { n: 7, label: 'Payment' },
                  { n: 8, label: 'Review' },
                  { n: 9, label: 'Dept. verification' },
                  { n: 10, label: 'Approval' },
                ].map(({ n, label }, i, arr) => (
                  <div key={n} style={{ display: 'flex', alignItems: 'flex-start', flexShrink: 0 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                      <div style={{
                        width: 34, height: 34, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: n <= 5 ? TEAL : '#e2e5ea',
                        color: n <= 5 ? '#fff' : '#94a3b8',
                        fontWeight: 700, fontSize: 12,
                        boxShadow: n === 5 ? `0 0 0 3px ${TEAL}33` : 'none',
                      }}>{n}</div>
                      <span style={{ fontSize: 9, color: '#94a3b8', textAlign: 'center', maxWidth: 68, lineHeight: 1.4 }}>{label}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <div style={{ width: 28, height: 2, background: n < 5 ? TEAL : '#e2e5ea', flexShrink: 0, marginTop: 16 }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 03: INTERFACES ─── */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) clamp(24px, 6vw, 80px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ fontSize: 10, letterSpacing: '0.12em', color: '#94a3b8', fontFamily: 'monospace', marginBottom: 14, textTransform: 'uppercase' }}>03 — Interface</div>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, fontFamily: 'Satoshi, sans-serif', color: '#323232', marginBottom: 40, marginTop: 0, letterSpacing: '-0.02em' }}>The Interfaces</h2>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid #e2e5ea', marginBottom: 36, overflowX: 'auto' }}>
            {screens.map(({ id, label }, i) => (
              <button
                key={id}
                onClick={() => setActiveScreen(id)}
                style={{
                  padding: '10px 18px', border: 'none', background: 'transparent', cursor: 'pointer',
                  fontSize: 13, fontWeight: activeScreen === id ? 600 : 400,
                  color: activeScreen === id ? TEAL : '#64748b',
                  borderBottom: `2px solid ${activeScreen === id ? TEAL : 'transparent'}`,
                  marginBottom: -1, transition: 'color 0.15s, border-color 0.15s',
                  whiteSpace: 'nowrap', fontFamily: 'Inter, sans-serif',
                }}
              >
                <span style={{ fontSize: 9, fontFamily: 'monospace', marginRight: 8, color: activeScreen === id ? TEAL : '#94a3b8' }}>0{i + 1}</span>
                {label}
              </button>
            ))}
          </div>

          {/* Screen header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 28, alignItems: 'end' }}>
            <div>
              <div style={{ fontSize: 9, letterSpacing: '0.1em', color: '#94a3b8', fontFamily: 'monospace', marginBottom: 10, textTransform: 'uppercase' }}>
                — Screen {String(screenIndex + 1).padStart(2, '0')} / 05
              </div>
              <h3 style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 800, fontFamily: 'Satoshi, sans-serif', color: '#323232', margin: 0, letterSpacing: '-0.02em' }}>{detail.heading}</h3>
            </div>
            <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.75, margin: 0 }}>{detail.body}</p>
          </div>

          <div style={{ marginBottom: 24 }}>
            <ActiveMockup />
          </div>

          <div style={{ background: '#f8fafc', border: '1px solid #e2e5ea', borderRadius: 12, padding: '18px 24px', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
            <div style={{ fontSize: 9, letterSpacing: '0.12em', color: '#94a3b8', fontFamily: 'monospace', flexShrink: 0, paddingTop: 2, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Design rationale</div>
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>{detail.rationale}</p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 04: OUTCOME ─── */}
      <section style={{ background: '#f8fafc', padding: 'clamp(64px, 8vw, 96px) clamp(24px, 6vw, 80px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ fontSize: 10, letterSpacing: '0.12em', color: '#94a3b8', fontFamily: 'monospace', marginBottom: 14, textTransform: 'uppercase' }}>04 — Outcome</div>

          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, fontFamily: 'Satoshi, sans-serif', color: '#323232', marginBottom: 16, marginTop: 0, letterSpacing: '-0.02em' }}>Responsive by Default</h2>
          <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.8, maxWidth: 640, marginTop: 0, marginBottom: 36 }}>
            The modernized portal is designed to adapt to context, not just screen size&nbsp;&nbsp;each device supports a different moment in the contractor's day.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 80 }}>
            {[
              { label: 'Desktop', desc: 'More information density and full workflow visibility  for form-filling and document review.' },
              { label: 'Tablet', desc: 'Optimized forms and document management  for on-site or office-counter use.' },
              { label: 'Mobile', desc: 'Prioritizes status, tasks, notifications, documents, appointments and the digital license.' },
            ].map(({ label, desc }) => (
              <div key={label} style={{ background: '#fff', border: '1px solid #e2e5ea', borderRadius: 12, padding: 24 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#323232', marginBottom: 10, fontFamily: 'Satoshi, sans-serif' }}>{label}</div>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 800, fontFamily: 'Satoshi, sans-serif', color: '#323232', marginBottom: 24, marginTop: 0, letterSpacing: '-0.02em' }}>
            Before <span style={{ color: '#cbd5e1' }}>→</span> After
          </h2>
          <div style={{ background: '#fff', border: '1px solid #e2e5ea', borderRadius: 14, overflow: 'hidden', marginBottom: 80 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 48px 1fr', background: '#f8fafc', borderBottom: '1px solid #e2e5ea', padding: '10px 24px', fontSize: 10, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'monospace' }}>
              <span>Before</span><span></span><span style={{ color: TEAL }}>After</span>
            </div>
            {[
              ['Multiple portals', 'One unified portal'],
              ['Paper + online', 'End-to-end digital'],
              ['Complex registration number', 'Simplified unique ID'],
              ['Password-only login', 'Multi-factor authentication'],
              ['Physical smart card', 'QR digital license'],
              ['Scattered documents', 'Central document management'],
              ['Limited tracking', 'Application timeline'],
              ['Difficult license verification', 'Instant QR verification'],
            ].map(([before, after], i) => (
              <div key={before} style={{ display: 'grid', gridTemplateColumns: '1fr 48px 1fr', padding: '14px 24px', borderBottom: i < 7 ? '1px solid #f1f5f9' : undefined, alignItems: 'center' }}>
                <span style={{ fontSize: 14, color: '#94a3b8', textDecoration: 'line-through' }}>{before}</span>
                <span style={{ textAlign: 'center', color: '#cbd5e1', fontSize: 18 }}>→</span>
                <span style={{ fontSize: 14, color: '#323232', fontWeight: 500 }}>{after}</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 800, fontFamily: 'Satoshi, sans-serif', color: '#323232', marginBottom: 24, marginTop: 0, letterSpacing: '-0.02em' }}>The Outcome</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              { title: 'Contractors', desc: 'A simpler way to register, renew, track and manage licenses.' },
              { title: 'Government teams', desc: 'A centralized workspace for applications, documents, tasks and workflows.' },
              { title: 'Verification authorities', desc: 'Faster access to trustworthy contractor information.' },
              { title: 'The ecosystem', desc: 'A connected platform able to integrate with other government services.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ background: '#fff', border: '1px solid #e2e5ea', borderRadius: 12, padding: 24, borderTop: `3px solid ${TEAL}` }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#323232', marginBottom: 10, fontFamily: 'Satoshi, sans-serif' }}>{title}</div>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 05: REFLECTION ─── */}
      <section style={{ background: NAVY, color: '#fff', padding: 'clamp(64px, 8vw, 96px) clamp(24px, 6vw, 80px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 12, fontSize: 10, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace', marginBottom: 56, textTransform: 'uppercase' }}>
            <span>05 — Close</span><span>·</span><span>Reflection</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start', marginBottom: 80 }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.14em', color: TEAL_BRIGHT, fontFamily: 'monospace', textTransform: 'uppercase', marginBottom: 22 }}>What I Learned</div>
              <blockquote style={{
                fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 900, fontFamily: 'Satoshi, sans-serif',
                lineHeight: 1.2, color: '#fff', margin: '0 0 26px', letterSpacing: '-0.02em',
              }}>
                Designing government services is less about making forms beautiful, and more about making complexity understandable.
              </blockquote>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, margin: '0 0 26px' }}>
                The biggest UX opportunity here was never a visual redesign&nbsp;&nbsp;it was understanding the entire service ecosystem and connecting its pieces:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 26 }}>
                {['People', 'Processes', 'Documents', 'Verification', 'Approval', 'License'].map((tag, i) => (
                  <span key={tag} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 20, padding: '4px 14px' }}>{tag}</span>
                    {i < 5 && <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11 }}>→</span>}
                  </span>
                ))}
              </div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, margin: 0 }}>
                By designing around that journey, CRRP can move from a collection of legacy workflows toward a connected, transparent and scalable public service.
              </p>
            </div>

            <div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 36 }}>
                <h2 style={{
                  fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 900, fontFamily: 'Satoshi, sans-serif',
                  lineHeight: 1.1, color: '#fff', margin: '0 0 22px', letterSpacing: '-0.03em',
                }}>
                  From paperwork<br />to progress.
                </h2>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                  CRRP modernization reimagines contractor registration as a connected digital service&nbsp;&nbsp;bringing registration, verification, payments, workflows and licensing into one experience.
                </p>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 32 }}>
            <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', lineHeight: 1.9, fontFamily: 'monospace', margin: 0, maxWidth: 680 }}>
              Project Brief— This case study is based on the CRRP proposal, which served as the primary source for understanding the existing system challenges and the objectives of the proposed redesign. The proposal outlined the problem space and functional requirements, but it did not include user research, usability testing, or post-launch performance data.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
