(** Az unió komplementere részhalmaza a komplementerek metszetének.
    A bizonyítás intuicionista: nincs szükség klasszikus elvre. *)

Section DeMorganUnionForward.

Variable U : Type.
Variables A B : SetU U.

Theorem set_complement_union_subset_intersection :
  (∁ (A ∪ B)) ⊆ ((∁ A) ∩ (∁ B)).
Proof.
  intros x x_not_in_union.
  split.
  - (** Az x nem lehet A eleme. *)
    intro x_in_A.
    apply x_not_in_union.
    left. exact x_in_A.
  - (** Az x nem lehet B eleme sem. *)
    intro x_in_B.
    apply x_not_in_union.
    right. exact x_in_B.
Qed.

End DeMorganUnionForward.

Print Assumptions set_complement_union_subset_intersection.
