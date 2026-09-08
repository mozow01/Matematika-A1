(** 4. feladat: egy halmaz és a rá vonatkozó különbség metszete üres. *)

Section IntersectionDifference.

Variable U : Type.
Variables A B : SetU U.

Theorem intersection_difference_is_empty :
  intersection A (difference B A) ≡ empty.
Proof.
  unfold seteq, isin, intersection, difference, empty.
  split.
  - intros x [x_in_A [x_in_B x_not_in_A]].
    exact (x_not_in_A x_in_A).
  - intros x impossible_membership.
    contradiction.
Qed.

End IntersectionDifference.
