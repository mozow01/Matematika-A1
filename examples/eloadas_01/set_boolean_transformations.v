(** 4. feladat: Boole-halmazalgebrai átalakítások. *)

Require Import Coq.Logic.Classical_Prop.

Section BooleanSetTransformations.

Variable U : Type.
Variables A B : SetU U.

Theorem intersection_complement_union :
  intersection A (union (complementer A) B) ≡ intersection A B.
Proof.
  unfold seteq, isin, intersection, union, complementer.
  split.
  - intros x [x_in_A [x_not_in_A | x_in_B]].
    + exfalso. exact (x_not_in_A x_in_A).
    + split; assumption.
  - intros x [x_in_A x_in_B].
    split.
    + exact x_in_A.
    + right. exact x_in_B.
Qed.

Theorem union_difference_absorption :
  union A (difference B A) ≡ union A B.
Proof.
  unfold seteq, isin, union, difference.
  split.
  - intros x [x_in_A | [x_in_B x_not_in_A]].
    + left. exact x_in_A.
    + right. exact x_in_B.
  - intros x [x_in_A | x_in_B].
    + left. exact x_in_A.
    + destruct (classic (A x)) as [x_in_A | x_not_in_A].
      * left. exact x_in_A.
      * right. split; assumption.
Qed.

End BooleanSetTransformations.
