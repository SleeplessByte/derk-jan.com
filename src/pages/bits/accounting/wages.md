# Wages

Directory payout:

- Personal bank account
- Description: `Salaris periode <year>-<month>-M`

Wage slip administration:

- Book bank transaction against `Relation: (private)` with `1671 - Te betalen lonen`
- Create &rarr; `62 - Wage slips` &rarr; Booking
  1. Upload the wage slips specification
  2. Attach to `Relation: (private)`
  3. Description: `Salaris periode <year>-<month>-M`
  4. Condition: `M - End next month`
  5. Date: `<any day>-<month>-<year>`
  6. Due date: (automatically) `<last day>-<month+1>-<year>`
  7. Line items:
     1. `4000 - Bruto loon`
     2. `4021 - Kosten nettovergoedingen`
     3. `2111 - Loonheffingen`
     4. `1750 - Af tr dragen sociale premises werkgever`
- Book IRS transaction against `Relation: 1 - Belastingdienst`
- Create &rarr; `62 - Wage slips` &rarr; Booking
  1. Upload the IRS specification
  2. Attach to `Relation: 1 - Belastingdienst`
  3. Description: `<LHnummer en volgnummer>`
  4. Condition: `D - End this month`
  5. Date: `<Date sent>`
  6. Due date: (automatically) `<last day>-<month>-<year>`
  7. Line items:
     1. `2111 - Loonheffing`
     2. `1750 - Af te dragen sociale premises wergever`
     3. `9200 - Rekenverschillen`: after reconciliation

After both are paid:

1. Reconcile wage slip `1671 - Te betalen lonen` per `Relation: (private)`
2. Reconcile IRS payment `1671 - Te betalen lonen` for `Relation: 1 - Belastingdienst`
   1. If necessary add extra line item `2111 - Loonheffing` to round number
   2. If necessary add extra line item `1750 - Af te dragen sociale premises wergever` to round number
   3. Set `9200 - Rekenverschillen` to negative matching rounding

Pension administration:

- Book bank transaction against `Relation: (pension)` with `1671 - Te betalen lonen`
- Create &rarr; `62 - Wage slips` &rarr; Booking
  1. Upload the _journaalposten_ matching period `<year>-<month>-M`
  2. Attach to `Relation: 8 - <pension bank>`
  3. Description: `Pensioen <year>-<month>-M`
  4. Condition: `IN - Incasso`
  5. Date: `<any day>-<month>-<year>`
  6. Due date: (automatically) `<last day>-<month>-<year>`
  7. Line items:
     1. `4052 - Pensioenkosten`

After it's paid:

1. Reconcile pension journaalpost entry `1671 - Te betalen lonen`.
