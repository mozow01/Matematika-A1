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
    (** Az X-szel vett metszetből X és A komplementerének metszete üres. *)
    assert (X_outside_A_is_empty :
      forall x, X x /\ ~ A x -> False).
    {
      intros x [x_in_X x_not_in_A].
      destruct (left_to_right x (conj x_in_X x_not_in_A))
        as [x_in_A x_not_in_X].
      exact (x_not_in_X x_in_X).
    }
    (** A felcserélt szerepű halmazokra ugyanez adódik. *)
    assert (A_outside_X_is_empty :
      forall x, A x /\ ~ X x -> False).
    {
      intros x [x_in_A x_not_in_X].
      destruct (right_to_left x (conj x_in_A x_not_in_X))
        as [x_in_X x_not_in_A].
      exact (x_not_in_A x_in_A).
    }
    split.
    + intros x x_in_X.
      destruct (classic (A x)) as [x_in_A | x_not_in_A].
      * exact x_in_A.
      * exfalso.
        apply (X_outside_A_is_empty x).
        split; assumption.
    + intros x x_in_A.
      destruct (classic (X x)) as [x_in_X | x_not_in_X].
      * exact x_in_X.
      * exfalso.
        apply (A_outside_X_is_empty x).
        split; assumption.
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
