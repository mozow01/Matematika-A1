(** A kritikus irány közvetlen bizonyítása a kizárt harmadik elvével.
    A classic elvet csak az x eleme A állításra alkalmazzuk. *)

Require Import Coq.Logic.Classical_Prop.

Section DeMorganExcludedMiddle.

Variable U : Type.
Variables A B : SetU U.

Theorem set_complement_intersection_subset_union_lem :
  (∁ (A ∩ B)) ⊆ ((∁ A) ∪ (∁ B)).
Proof.
  intros x x_not_in_intersection.
  destruct (classic (x ∈ A)) as [x_in_A | x_not_in_A].
  - (** Első eset: x eleme A-nak. *)
    right.
    intro x_in_B.
    apply x_not_in_intersection.
    split.
    + exact x_in_A.
    + exact x_in_B.
  - (** Második eset: x nem eleme A-nak. *)
    left. exact x_not_in_A.
Qed.

End DeMorganExcludedMiddle.

Print Assumptions set_complement_intersection_subset_union_lem.
