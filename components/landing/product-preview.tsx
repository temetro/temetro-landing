import { Activity, Pill, Quote } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { MiniSparkline } from "@/components/landing/figures"

// A static, no-backend mock of the real product (the chat → patient-record-cards
// flow) so the hero shows how temetro works. Built from COSS Card / Badge /
// Avatar + the dependency-free MiniSparkline. All data here is illustrative.

function RecordCard({
  label,
  children,
  action,
}: {
  label: string
  children: React.ReactNode
  action?: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-border bg-background/60 p-3.5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs text-muted-foreground">{label}</span>
        {action}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  )
}

export function ProductPreview() {
  return (
    <Card className="gap-0 overflow-hidden py-0 text-left">
      {/* faux window title bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        </div>
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          temetro · New chat
        </span>
      </div>

      <div className="space-y-5 p-4 sm:p-6">
        {/* clinician prompt */}
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-br-md bg-muted px-3.5 py-2 text-sm text-foreground">
            Pull up Amina Yusuf&apos;s recent labs and current meds
          </div>
        </div>

        {/* assistant answer = a row of record cards */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
              t
            </span>
            <span className="text-xs font-medium text-muted-foreground">temetro</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <RecordCard
              action={<Badge variant="secondary">Active</Badge>}
              label="Summary"
            >
              <div className="flex items-center gap-2.5">
                <Avatar size="sm">
                  <AvatarFallback>AY</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-foreground">
                    Amina Yusuf
                  </div>
                  <div className="text-xs text-muted-foreground">#10293 · 54 · F</div>
                </div>
              </div>
            </RecordCard>

            <RecordCard
              action={<Activity className="size-3.5 text-muted-foreground" />}
              label="HbA1c · 90 days"
            >
              <div className="h-9 w-full">
                <MiniSparkline points={[7.9, 7.6, 7.5, 7.2, 6.9, 6.8]} />
              </div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-lg font-semibold tracking-tight text-foreground">
                  6.8%
                </span>
                <span className="text-xs text-muted-foreground">latest</span>
              </div>
            </RecordCard>

            <RecordCard
              action={<Badge variant="secondary">2 active</Badge>}
              label="Medications"
            >
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Pill className="size-3.5 shrink-0 text-muted-foreground" />
                  <span className="text-foreground">Lisinopril</span>
                  <span className="text-muted-foreground">10 mg</span>
                </li>
                <li className="flex items-center gap-2">
                  <Pill className="size-3.5 shrink-0 text-muted-foreground" />
                  <span className="text-foreground">Metformin</span>
                  <span className="text-muted-foreground">500 mg</span>
                </li>
              </ul>
            </RecordCard>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Quote className="size-3.5" />
            Every answer cited · 3 sources from the record
          </div>
        </div>
      </div>
    </Card>
  )
}
