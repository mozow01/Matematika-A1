(** 5. feladat: az X \ A = A \ X halmazegyenlet megoldása. *)

Require Import Coq.Logic.Classical_Prop.

Section DifferenceEquation.

Variable U : Type.
Variables A X : SetU U.

Theorem difference_equation_solution :
  (difference X A ≡ difference A X) <-> X ≡ A.
Proof.
  unfold seteq, isin, difference.
  split.
  - intros [left_to_right right_to_left].
    split.
    + intros x x_in_X.
      destruct (classic (A x)) as [x_in_A | x_not_in_A].
      * exact x_in_A.
      * exfalso.
        destruct (left_to_right x (conj x_in_X x_not_in_A))
          as [x_in_A x_not_in_X].
        exact (x_not_in_X x_in_X).
    + intros x x_in_A.
      destruct (classic (X x)) as [x_in_X | x_not_in_X].
      * exact x_in_X.
      * exfalso.
        destruct (right_to_left x (conj x_in_A x_not_in_X))
          as [x_in_X x_not_in_A].
        exact (x_not_in_A x_in_A).
  - intros [X_subset_A A_subset_X].
    split.
    + intros x [x_in_X x_not_in_A].
      exfalso.
      apply x_not_in_A.
      apply X_subset_A.
      exact x_in_X.
    + intros x [x_in_A x_not_in_X].
      exfalso.
      apply x_not_in_X.
      apply A_subset_X.
      exact x_in_A.
Qed.

End DifferenceEquation.
