(** 3. feladat: feltételes halmazegyenlőség. *)

Section ConditionalSetEquality.

Variable U : Type.
Variables A B : SetU U.

Theorem subset_intersection_identity :
  A ⊆ B -> (A ∩ B) ≡ A.
Proof.
  intros subset_condition.
  unfold subset, seteq, isin, intersection in *.
  split.
  - intros x [x_in_A x_in_B].
    exact x_in_A.
  - intros x x_in_A.
    split.
    + exact x_in_A.
    + apply subset_condition.
      exact x_in_A.
Qed.

End ConditionalSetEquality.
