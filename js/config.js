/**
 * config.js — App configuration
 */

window.APP_CONFIG = {
  // ── Supabase ────────────────────────────────────────────────
  SUPABASE_URL:      'https://lzikbvokyykurcldnupy.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6aWtidm9reXlrdXJjbGRudXB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NDk0MjAsImV4cCI6MjA5NDMyNTQyMH0.frd4u02NIpO3N56ZBQ4x3FhbR9i8PgTBxreuLtBtOV0',

  // ── Exam Defaults ────────────────────────────────────────────
  EXAM_DURATION_SECONDS: 3 * 60 * 60,   // 3 hours
  MARKS_CORRECT:   3,
  MARKS_WRONG:    -1,
  MARKS_UNATTEMPTED: 0,

  // ── Version ──────────────────────────────────────────────────
  VERSION: '1.0.0',
};
