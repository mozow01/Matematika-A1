(** 1. feladat: a metszet disztributivitása az unió felett. *)

Section SetAlgebraExercise1.

Variable U : Type.
Variables A B C : SetU U.

Theorem set_inter_union_distributive :
  (A ∩ (B ∪ C)) ≡ ((A ∩ B) ∪ (A ∩ C)).
Proof.
  unfold seteq, isin, intersection, union.
  split.
  - intros x [HA [HB | HC]].
    + left. split; assumption.
    + right. split; assumption.
  - intros x [[HA HB] | [HA HC]].
    + split.
      * exact HA.
      * left. exact HB.
    + split.
      * exact HA.
      * right. exact HC.
Qed.

End SetAlgebraExercise1.
