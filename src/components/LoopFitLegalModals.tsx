'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import PrivacyContent from '@/components/legal/loopfit/PrivacyContent'
import TermsContent from '@/components/legal/loopfit/TermsContent'

type ModalKind = 'privacy' | 'terms' | null

export default function LoopFitLegalModals() {
  const [open, setOpen] = useState<ModalKind>(null)

  const close = () => setOpen(null)

  return (
    <>
      {/* Triggers */}
      <div className="mt-8 flex flex-wrap gap-3">
        <Button
          variant="outline"
          onClick={() => setOpen('privacy')}
        >
          Privacy Policy
        </Button>

        <Button variant="outline" onClick={() => setOpen('terms')}>
          Terms of Service
        </Button>
      </div>

      {/* Privacy Dialog */}
      <Dialog open={open === 'privacy'} onOpenChange={(v) => setOpen(v ? 'privacy' : null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
          </DialogHeader>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <PrivacyContent />
          </div>

          <DialogFooter className="flex items-center justify-between gap-2">
            <div className="flex gap-2">
              <a
                href="/legal/loopfit/privacy.pdf"
                download
                className="inline-flex items-center rounded-md border px-3 py-2 text-sm hover:bg-slate-50"
              >
                Download PDF
              </a>
              <Button variant="secondary" onClick={close}>Close</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Terms Dialog */}
      <Dialog open={open === 'terms'} onOpenChange={(v) => setOpen(v ? 'terms' : null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Terms of Service</DialogTitle>
          </DialogHeader>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <TermsContent />
          </div>

          <DialogFooter className="flex items-center justify-between gap-2">
            <div className="flex gap-2">
              <a
                href="/legal/loopfit/terms.pdf"
                download
                className="inline-flex items-center rounded-md border px-3 py-2 text-sm hover:bg-slate-50"
              >
                Download PDF
              </a>
              <Button variant="secondary" onClick={close}>Close</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
