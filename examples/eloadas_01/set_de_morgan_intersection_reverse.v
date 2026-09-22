(** A komplementerek uniója részhalmaza a metszet komplementerének.
    Mindkét esetben közvetlenül ellentmondást kapunk a metszettagságból. *)

Section DeMorganIntersectionReverse.

Variable U : Type.
Variables A B : SetU U.

Theorem set_union_complements_subset_complement_intersection :
  ((∁ A) ∪ (∁ B)) ⊆ (∁ (A ∩ B)).
Proof.
  intros x x_in_union_of_complements.
  destruct x_in_union_of_complements as [x_not_in_A | x_not_in_B].
  - (** Első eset: x eleme A komplementerének. *)
    intro x_in_intersection.
    destruct x_in_intersection as [x_in_A x_in_B].
    exact (x_not_in_A x_in_A).
  - (** Második eset: x eleme B komplementerének. *)
    intro x_in_intersection.
    destruct x_in_intersection as [x_in_A x_in_B].
    exact (x_not_in_B x_in_B).
Qed.

End DeMorganIntersectionReverse.

Print Assumptions set_union_complements_subset_complement_intersection.
