(** 4. feladat: egymásba ágyazott halmazkülönbségek azonossága. *)

Require Import Coq.Logic.Classical_Prop.

Section SetAlgebraExercise4.

Variable U : Type.
Variables A B C : SetU U.

Theorem nested_difference_identity :
  difference A (difference B C) ≡
  union (difference A B) (intersection A C).
Proof.
  unfold seteq, isin, difference, union, intersection.
  split.
  - intros x [HA HNotDifference].
    destruct (classic (B x)) as [HB | HNotB].
    + right.
      split.
      * exact HA.
      * apply NNPP.
        intro HNotC.
        apply HNotDifference.
        split; assumption.
    + left. split; assumption.
  - intros x [[HA HNotB] | [HA HC]].
    + split.
      * exact HA.
      * intros [HB HNotC].
        exact (HNotB HB).
    + split.
      * exact HA.
      * intros [HB HNotC].
        exact (HNotC HC).
Qed.

End SetAlgebraExercise4.
