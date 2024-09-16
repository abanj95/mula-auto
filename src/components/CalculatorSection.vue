<template>
  <v-container class="calculator-card" max-width="600">
    <v-card>
      <v-card-title class="text-h6">Pawn Calculator</v-card-title>

      <v-card-text>
        <v-row>
          <!-- Estimated Vehicle Value -->
          <v-col>
            <v-text-field
              label="Estimated Vehicle Value"
              v-model="estimatedValue"
              type="number"
              :rules="[(value) => value >= 40000 || 'Minimum value is N$ 40,000']"
              required
              variant="outlined"
            />
          </v-col>
          <!-- Mileage -->
          <v-col>
            <v-text-field
              label="Mileage"
              v-model="mileage"
              type="number"
              required
              variant="outlined"
            />
          </v-col>
        </v-row>

        <!-- Maximum Loan Amount (Auto-calculated) -->
        <v-text-field
          label="Maximum Loan Amount"
          :value="maxLoanAmount"
          readonly
          variant="outlined"
        />

        <!-- Preferred Loan Amount -->
        <v-text-field
          label="Preferred Loan Amount"
          v-model="preferredLoanAmount"
          type="number"
          :rules="[
            (value) =>
              value <= maxLoanAmount || `Cannot exceed ${maxLoanAmount}`,
            (value) => value >= 20000 || 'Minimum loan is N$ 20,000',
          ]"
          required
          variant="outlined"
        />

        <!-- Repayment Period -->
        <v-select
          label="Repayment Period"
          v-model="repaymentPeriod"
          :items="repaymentOptions"
          required
          variant="outlined"
        />

        <v-row>
          <!-- Parking Fees (Auto-calculated) -->
          <v-col>
            <!-- <v-text-field label="Parking Fees" :value="parkingFees" readonly /> -->
             <div>
                <v-card-subtitle>
                    Parking Fees
                </v-card-subtitle>
                <div class="readonly-text">
                    N$ {{ parkingFees }}
                </div>
             </div>
          </v-col>

          <!-- Repayable Amount (Auto-calculated) -->
          <v-col>
            <div>
                <v-card-subtitle>
                    Repayable Amount
                </v-card-subtitle>
                <div class="readonly-text">
                    N$ {{ repayableAmount }}
                </div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-btn class="text-none mb-4 button-col" size="x-large" variant="flat" block >PAWN VEHICLE!</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";

// Form fields
const estimatedValue = ref(40000);
const mileage = ref("");
const preferredLoanAmount = ref(20000);
const repaymentPeriod = ref("");
const repaymentOptions = ref(["1 month", "2 months", "3 months"]);

// Computed for Maximum Loan Amount
const maxLoanAmount = computed(() => {
  return estimatedValue.value * 0.5;
});

// Computed for Parking Fees
const parkingFees = computed(() => {
  if (repaymentPeriod.value === "1 month") {
    return 0;
  } else if (repaymentPeriod.value === "2 months") {
    return 3000;
  } else if (repaymentPeriod.value === "3 months") {
    return 6000;
  }
  return 0; // default
});

// Computed for Repayable Amount
const repayableAmount = computed(() => {
  return preferredLoanAmount.value * 1.3 + parkingFees.value;
});
</script>

<style scoped>
.calculator-card {
  margin-top: 20px;
}

.v-card {
  padding: 10px;
}
.readonly-text{
text-align: left;
font-size:xx-large;
font-weight: bolder;
padding-left: 16px;
margin-top: 5px;
color: #121536;
}
.button-col{
    background-color: #121536;
    color: white;
    text-transform: capitalize;
}
</style>
