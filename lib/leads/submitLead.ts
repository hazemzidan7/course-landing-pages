import type { LeadPayload, SubmitLeadResult } from '@/lib/leads/types';

// Single seam for future CRM integration. No persistence, no network call,
// no Firebase/CRM connection yet — Step 2 only proves the form can produce
// a valid LeadPayload and hand it off through one function call.
export async function submitLead(payload: LeadPayload): Promise<SubmitLeadResult> {
  console.log('[submitLead] lead captured (not persisted):', payload);
  return { success: true };
}
