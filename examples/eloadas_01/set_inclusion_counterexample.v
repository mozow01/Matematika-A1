(** 5. feladat: tartalmazás és a fordított tartalmazás ellenpéldája. *)

Section SetAlgebraExercise5.

Variable U : Type.

Definition K (A B C : SetU U) : SetU U :=
  difference (difference A (difference B C)) C.

Definition L (A B C : SetU U) : SetU U :=
  union (difference A B) (intersection A C).

Theorem K_is_subset_of_L (A B C : SetU U) :
  K A B C ⊆ L A B C.
Proof.
  unfold subset, K, L, isin, difference, union, intersection.
  intros x [[HA HNotDifference] HNotC].
  left.
  split.
  - exact HA.
  - intro HB.
    apply HNotDifference.
    split; assumption.
Qed.

End SetAlgebraExercise5.

Arguments K {U} A B C.
Arguments L {U} A B C.

Definition A_example (x : nat) : Prop := x = 1.
Definition B_example (_ : nat) : Prop := False.
Definition C_example (x : nat) : Prop := x = 1.

Theorem reverse_inclusion_fails :
  ~ (L A_example B_example C_example
     ⊆ K A_example B_example C_example).
Proof.
  intro HIncluded.
  assert (HInL : 1 ∈ L A_example B_example C_example).
  {
    right.
    split; reflexivity.
  }
  specialize (HIncluded 1 HInL).
  destruct HIncluded as [HInFirstDifference HNotC].
  apply HNotC.
  reflexivity.
Qed.
